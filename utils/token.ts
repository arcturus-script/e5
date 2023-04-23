import { get, getPath } from '@utils/tools';

function goTo(url: string) {
  window.location.href = url;
}

export function getCode(client_id: string, scope: string) {
  const url = useRuntimeConfig().public.url;

  goTo(
    `${url}/authorize?client_id=${client_id}&scope=${scope}&response_type=code&redirect_uri=${getPath()}`
  );
}

export async function getRefreshToken(code: string) {
  return await $fetch('/api/token', {
    method: 'post',
    body: {
      code,
      appID: get('appID'),
      appSecret: get('appSecret'),
      redirect_uri: getPath()
    }
  });
}
