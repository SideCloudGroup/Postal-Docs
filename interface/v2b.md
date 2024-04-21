# 在 V2Board 使用 API 对接邮局服务

::: warning 警告
此插件仅适用于V2Board。 XBoard用户请使用SMTP对接。
:::

在开始对接前，请确保您已完成[开始使用](/start/create-server)中的所有步骤，并已阅读[使用API对接](/interface/api)。

## 安装插件

前往 https://github.com/SideCloudGroup/Postal-For-V2Board 下载文件，并替换V2Board目录下的`/app/Jobs/SendEmailJob.php`。

## 安装依赖包

在V2Board网站根目录下执行以下命令：

```bash
composer require postal/postal
```

## 配置发信

在V2Board的管理员面板`系统配置`-`邮件`中进行设置。

`SMTP服务器地址` 为Postal面板地址，结尾无需加 /

`SMTP密码` 为Postal API 密钥

`发件地址` 为发送邮件的发件地址

其余设置请留空

## 测试发信

请测试发信功能，确保邮件发送正常。修改设置后可能需要**重启队列**才能生效。