from flask import Flask
from flask import request
from flask import render_template
import requests
import json

app = Flask(__name__)


# 获取授权码
@app.route('/')
def getCode():
    return render_template('index.html')


# 服务器请求 token
@app.route('/getToken', methods=['POST'])
def Token():
    if request.method == 'POST':
        datas = request.get_json()
        url = 'https://login.microsoftonline.com/common/oauth2/v2.0/token'
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        rep = json.loads(requests.post(url, headers=headers, data=datas).text)
        return rep.get('refresh_token')
    else:
        return "没获取到 token 😥"


if __name__ == '__main__':
    app.run()
