# API 对接

API对接能够使邮件发送更快，配置更简单，并提高邮件送达率。

如果程序支持API，我们建议您优先使用API对接，优化您的发件体验。

## 使用 API 接口

### 创建 API Credentials (密钥）

在Credentials页面点击`Add credential`新建密钥，即可创建一个新的密钥。

![](/assets/images/create-api-credentials.png)

创建时，TYPE请选择API，NAME处随意填写名称，然后点击Create credentials。请注意，`API密钥` 与 `SMTP密钥` **不通用**。

![](/assets/images/create-api-credentials2.png)

现在，在Credentials页面，你将可以看到随机生成的API密钥

### 常用参数说明

使用API发件，通常需要4个参数：

`API地址` 邮局面板的地址 `https://panel.sidecloud.cc` ，结尾无需斜杠

`API密钥` 就是上面创建的API credential

`发件邮箱` 请填写xxx@你的域名，xxx可随意指定

`发件人名` 显示的发件人名称，可随意填写

## API 文档

请参阅 https://apiv1.postalserver.io/