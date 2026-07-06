# API 对接

API 对接发送效率更高，部分程序可通过插件实现一键配置。

::: tip 建议
优先使用 [SMTP 对接](/interface/smtp)。仅当您的程序已内置 Postal API 支持，或提供了专用 API 插件时，再考虑 API 方式。
:::

## 创建 API Credentials

在 **Credentials** 页面点击 **Add credential** 新建密钥。

![](/assets/images/create-api-credentials.png)

创建时 **TYPE** 选择 **API**，**NAME** 填写便于识别的名称，然后点击 **Create credentials**。

::: warning 注意
**API 密钥** 与 **SMTP 密钥** 不通用，请分别创建。
:::

![](/assets/images/create-api-credentials2.png)

创建完成后，可在 Credentials 页面查看随机生成的 API 密钥。

## 常用参数

使用 API 发件通常需要以下 4 个参数：

| 参数 | 说明 |
|------|------|
| API 地址 | 邮局面板地址，如 `https://panel.sidecloud.cc`，末尾无需斜杠 |
| API 密钥 | 上文创建的 API Credential |
| 发件邮箱 | 格式为 `xxx@你的域名`，`xxx` 可随意指定 |
| 发件人名 | 显示的发件人名称，可随意填写 |

## API 文档

请参阅 [Postal API 官方文档](https://apiv1.postalserver.io/)。
