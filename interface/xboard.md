# 在 XBoard使用 API 对接邮局服务

::: danger
如果您使用的是Docker部署的XBoard，请使用SMTP进行发信。
:::


在开始对接前，请确保您已完成[开始使用](/start/create-server)中的所有步骤，并已阅读[使用API对接](/interface/api)。

## 安装插件

前往 https://github.com/yuzaimala/Postal-For-Xboard 下载文件，并替换XBoard目录下的`/app/Services/MailService.php`。

## 安装依赖包

在XBoard网站根目录下执行以下命令：

```bash
php composer.phar require "postal/postal:^2.0.1"
```

## 配置发信

在XBoard的管理员面板`系统配置`-`邮件`中进行设置。

`SMTP服务器地址` 为Postal面板地址，结尾无需加 /

`SMTP密码` 为Postal API 密钥

`发件地址` 为发送邮件的发件地址

其余设置请留空

## 测试发信

请测试发信功能，确保邮件发送正常。修改设置后可能需要**重启队列**才能生效。