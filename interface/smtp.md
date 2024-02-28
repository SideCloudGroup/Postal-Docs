# SMTP 对接

如果你使用的程序支持通过Postal API发送邮件，请优先使用更高效的API接口。

## 查看 SMTP 参数

点击面板右上角`Help`，可以看到SMTP服务器 用户名 密码等参数。
![](/assets/images/smtp-help.png)

![](/assets/images/smtp-detail.png)

初次使用需要创建Credentials (密码)，type选择SMTP

Sender (发信人) 的格式为 XXX@你的域名，其中XXX可以随意填写

注意：Username的斜杠并非表示“或”，需要完整填写

如果你的程序不支持同时使用username和sender参数，在用户名处填写你的发件邮箱即可

SMTP未开启SSL，在配置时请不要开启加密