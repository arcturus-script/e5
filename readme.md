<div align="center">
    <h1>E5续订程序(腾讯云函数实现)</h1>
</div>
### 步骤

#### 获取 refresh_token

可以使用 rclone.exe 获取，具体步骤可以查看[B站教程](https://www.bilibili.com/video/BV1mE411V74B?share_source=copy_web)

也可以使用我提供的 index.html 获取，下面介绍具体步骤


files:	Files.Read.All、Files.ReadWrite.All、Sites.Read.All、Sites.ReadWrite.All
user:	User.Read.All、User.ReadWrite.All、Directory.Read.All、Directory.ReadWrite.All
mail:  Mail.Read、Mail.ReadWrite、MailboxSettings.Read、MailboxSettings.ReadWrite
注册后一定要再点代表xxx授予管理员同意,否则outlook api无法调用

### 声明
此脚本在 AutoApiSecret 的基础上修改，由于该脚本已被 github 删掉了，所以就不链接了