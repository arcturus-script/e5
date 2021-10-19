<div align="center">
<h1>获取 Microsoft graph 的 refresh_token</h1>

[![GitHub issues](https://img.shields.io/github/issues/ICE99125/E5_refresh_token?color=red&style=for-the-badge)](https://github.com/ICE99125/E5_refresh_token/issues)  [![GitHub forks](https://img.shields.io/github/forks/ICE99125/E5_refresh_token?style=for-the-badge)](https://github.com/ICE99125/E5_refresh_token/network)  [![GitHub stars](https://img.shields.io/github/stars/ICE99125/E5_refresh_token?style=for-the-badge)](https://github.com/ICE99125/E5_refresh_token/stargazers)  [![Python](https://img.shields.io/badge/python-3.6%2B-orange?style=for-the-badge)](https://www.python.org/)  [![flask](https://img.shields.io/badge/Flask-1.0.2-blue?style=for-the-badge)](https://flask.palletsprojects.com/en/2.0.x/)
</div>

### 说明

该应用可用于获取 Microsoft graph 的 refresh_token，以配合 E5 的续订程序

### 搭建
1. 在 github 上 fork 项目

   [![5wETbR.png](https://z3.ax1x.com/2021/10/19/5wETbR.png)](https://imgtu.com/i/5wETbR)

2. 进入[serverless应用](https://console.cloud.tencent.com/sls)后点击创建应用

   [![5wE0gg.png](https://z3.ax1x.com/2021/10/19/5wE0gg.png)](https://imgtu.com/i/5wE0gg)

3. 选择 web 应用 - flask 框架

   [![5wV7Qg.png](https://z3.ax1x.com/2021/10/19/5wV7Qg.png)](https://imgtu.com/i/5wV7Qg)

4. 根据情况创建应用

   [![5wZb9K.png](https://z3.ax1x.com/2021/10/19/5wZb9K.png)](https://imgtu.com/i/5wZb9K)

5. 等待部署成功，即可通过 `资源列表` - `API网关` - `URL` 访问

   [![5wmbOe.png](https://z3.ax1x.com/2021/10/19/5wmbOe.png)](https://imgtu.com/i/5wmbOe)

### 本地部署

> 如果不想使用 serverless 应用(毕竟只使用一次，部署起来麻烦死了)，并且您的电脑上曾经安装过 python，可以进行本地部署

1. 克隆仓库

   ```bash
   git clone https://github.com/ICE99125/E5_refresh_token.git
   ```

2. 安装 virtualenv (如果已经安装过那就更好了)

   ```bash
   pip install virtualenv

3. 创建 python 虚拟环境

   ```bash
   virtualenv venv
   ```

4. 安装必要的依赖

   ``` bash
   pip install -r requirements.txt

5. 删除 app.py 下的 `host="0.0.0.0",port=9000`

   [![5w1ZtJ.png](https://z3.ax1x.com/2021/10/19/5w1ZtJ.png)](https://imgtu.com/i/5w1ZtJ)

6. 修改 templates - index.html 的第119行

   ```javascript
   const REDIRECT_URI = `${window.location.protocol}//${window.location.hostname}/release/`;
   --->
   const REDIRECT_URI = 'http://localhost:5000';
   // 5000 是flask的默认端口
   ```

   [![5w38K0.png](https://z3.ax1x.com/2021/10/19/5w38K0.png)](https://imgtu.com/i/5w38K0)

7. 将 Azure 的重定向地址改为 `http://localhost:5000`

> 目前本地部署仅火狐浏览器可以在 http://localhost:5000 或者 http:127.0.0.1:5000 上获取成功，其他浏览器只能在 http://localhost:5000 下才能成功

### 获取 refresh_token

1. 登陆[Azure](https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredApps)创建应用

   [![5wnD7d.png](https://z3.ax1x.com/2021/10/19/5wnD7d.png)](https://imgtu.com/i/5wnD7d)

2. 重定向 URL 填写从 serverless 上获得的 URL

   [![5wusrF.png](https://z3.ax1x.com/2021/10/19/5wusrF.png)](https://imgtu.com/i/5wusrF)

3. 获取应用 ID

   [![5wKmsU.png](https://z3.ax1x.com/2021/10/19/5wKmsU.png)](https://imgtu.com/i/5wKmsU)

4. 获取密钥

   [![5wKBFA.png](https://z3.ax1x.com/2021/10/19/5wKBFA.png)](https://imgtu.com/i/5wKBFA)

5. 给应用一些权限

   [![5wKOw4.png](https://z3.ax1x.com/2021/10/19/5wKOw4.png)](https://imgtu.com/i/5wKOw4)

   权限

   |   分类    |                           具体权限                           |
   | :-------: | :----------------------------------------------------------: |
   |     -     |                       `offline_access`                       |
   |   file    |           `Files.Read.All`  `Files.ReadWrite.All`            |
   |   sites   |            `Sites.Read.All` `Sites.ReadWrite.All`            |
   |   user    |            `User.Read.All`  `User.ReadWrite.All`             |
   | directory |       `Directory.Read.All`  `Directory.ReadWrite.All`        |
   |   mail    | `Mail.Read`  `Mail.ReadWrite`  `MailboxSettings.Read`  `MailboxSettings.ReadWrite` |

   > 请务必确保存在权限 `offline_access` 否则得不到 refresh_token 还会报错

6. 万事具备，已经可以获取 refresh_token 了