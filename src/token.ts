import axios from 'axios';

const request = axios.create({
  baseURL: 'https://login.microsoftonline.com/common/oauth2/v2.0',
  timeout: 1000,
  headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
});

export function getRefreshToken() {
  return request.post('token', {});
  // datas = request.get_json()
  //     url =
  //     headers = {}
  //     rep = json.loads(requests.post(url, headers=headers, data=datas).text)
  //     if ('error' in rep):
  //         return rep.get('error_description')
  //     else:
  //         return rep.get('refresh_token')
}
