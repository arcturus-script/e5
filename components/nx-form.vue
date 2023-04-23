<template>
  <a-form :model="formData" @finish="submit" :label-col="{ span: 6 }" autocomplete="off">
    <a-form-item
      name="appID"
      label="应用ID"
      :rules="[
        {
          required: true,
          message: '未输入应用ID'
        }
      ]"
    >
      <a-input v-model:value="formData.appID" />
    </a-form-item>
    <a-form-item
      name="appSecret"
      label="应用密钥"
      :rules="[
        {
          required: true,
          message: '未输入应用密钥'
        }
      ]"
    >
      <a-input v-model:value="formData.appSecret" />
    </a-form-item>
    <a-form-item name="scopes" label="作用域">
      <a-select
        v-model:value="formData.scopes"
        :token-separators="[',']"
        :open="false"
        :options="options"
        mode="tags"
      />
    </a-form-item>
    <a-form-item label="Access token">
      <a-space>
        <a-input v-model:value="access_token" :disabled="true" />
        <a-button @click="copyToken(access_token)" :disabled="!access_token"> 复制 </a-button>
      </a-space>
    </a-form-item>
    <a-form-item label="Refresh token">
      <a-space>
        <a-input v-model:value="refresh_token" :disabled="true" />
        <a-button @click="copyToken(refresh_token)" :disabled="!refresh_token"> 复制 </a-button>
      </a-space>
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 6 }">
      <a-space>
        <a-button html-type="submit"> 授权 </a-button>
        <a-button type="primary" @click="getToken"> 获取 token </a-button>
      </a-space>
    </a-form-item>
  </a-form>
</template>

<script lang="ts" setup>
import { message } from 'ant-design-vue';
import { useClipboard } from '@vueuse/core';
import { get } from '@utils/tools';

interface FormData {
  appID: string;
  appSecret: string;
  scopes: string[];
}

const route = useRoute();
const { copy } = useClipboard();

const opts = [
  'offline_access',
  'Files.Read.All',
  'Files.ReadWrite.All',
  'Sites.Read.All',
  'Sites.ReadWrite.All',
  'User.Read.All',
  'User.ReadWrite.All',
  'Directory.Read.All',
  'Directory.ReadWrite.All',
  'Mail.Read',
  'Mail.ReadWrite',
  'MailboxSettings.Read',
  'MailboxSettings.ReadWrite'
];

const options = opts.map((value) => ({ value, label: value }));

const formData = ref<FormData>({
  appID: '',
  appSecret: '',
  scopes: opts
});

onMounted(() => {
  formData.value.appID = get('appID');
  formData.value.appSecret = get('appSecret');
});

const access_token = ref('');
const refresh_token = ref('');

const submit = (evt: FormData) => {
  save('appID', evt.appID);
  save('appSecret', evt.appSecret);
  getCode(evt.appID, evt.scopes.join(' '));
};

const copyToken = (token: string) => {
  copy(token);
  message.success('复制成功');
};

const getToken = () => {
  const code = route.query.code;

  if (typeof code !== 'undefined') {
    log(code);

    getRefreshToken(code)
      .then((res) => {
        log(res);

        message.success('token 获取成功');

        access_token.value = res.access_token;
        refresh_token.value = res.refresh_token;
      })
      .catch((err) => {
        log(err.data.data);

        if (typeof err.data.data.error_description !== 'undefined') {
          const re = /^.+?: (.+?)\./;
          const msg = err.data.data.error_description.match(re);

          if (msg !== null) {
            message.error(msg[1]);
          }
        }
      });
  } else {
    message.error('请先授权哦');
  }
};
</script>
