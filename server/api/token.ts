export default defineEventHandler(async (event) => {
  const url = useRuntimeConfig().public.url;
  const { code, appID, appSecret, redirect_uri } = await readBody(event);

  return await $fetch(`${url}/token`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      code,
      client_id: appID,
      client_secret: appSecret,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code'
    })
  });
});
