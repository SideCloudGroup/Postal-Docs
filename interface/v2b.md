# V2Board API 对接

::: tip 建议
若您的 V2Board 支持 SMTP 发信，推荐优先使用 [SMTP 对接](/interface/smtp)，配置更简单、兼容性更好。
:::

在开始对接前，请确保已完成[开始使用](/start/create-server)中的所有步骤，并已阅读 [API 对接](/interface/api) 中的密钥创建方法。

## 安装插件

前往 [Postal-For-V2Board](https://github.com/SideCloudGroup/Postal-For-V2Board) 下载文件，替换 V2Board 目录下的 `/app/Jobs/SendEmailJob.php`。

## 安装依赖

在 V2Board 网站根目录执行：

```bash
php composer.phar require "postal/postal:^2.0.1"
```

## 配置发信

在 V2Board 管理员面板的 **系统配置 → 邮件** 中进行设置：

| 配置项 | 填写说明 |
|--------|----------|
| SMTP 服务器地址 | Postal 面板地址，末尾无需加 `/` |
| SMTP 密码 | Postal API 密钥 |
| 发件地址 | 发信用的邮箱地址 |
| 其余设置 | 留空 |

## 测试发信

配置完成后请测试发信功能。修改设置后可能需要**重启队列**才能生效。
