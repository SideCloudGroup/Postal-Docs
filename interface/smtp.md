# SMTP 对接

SMTP 是最通用的发信方式，**推荐作为默认对接方案**。绝大多数程序均支持 SMTP，配置简单、兼容性最好。

若您的程序已内置 Postal API 支持且提供了专用对接教程，也可参考对应平台的 API 对接文档。

## 查看 SMTP 参数

点击面板右上角的 **Help**，即可查看 SMTP 服务器地址、用户名、密码等参数。

![](/assets/images/smtp-help.png)

![](/assets/images/smtp-detail.png)

## 创建 Credentials

首次使用需创建 Credentials（密码），**Type** 选择 **SMTP**。

**Sender**（发件人）格式为 `xxx@你的域名`，其中 `xxx` 可随意填写。

::: warning 注意
- **Username** 中的斜杠不是「或」的意思，需要完整填写。
- 若程序不支持同时配置 Username 和 Sender，直接在用户名处填写发件邮箱即可。
- SMTP **未启用 SSL**，配置时请勿开启加密选项。
:::
