# 收信配置

::: info
若您不需要收信功能，可跳过本章。
:::

邮局不提供 POP3/IMAP 等收信协议，但支持将收到的邮件转发至指定邮箱，从而实现基本的收信能力。

## 配置步骤

在邮局服务器页面点击 **Routing**。

![](/assets/images/receive-1.png)

点击 **Add an address endpoint**，填入您的接收邮箱并确认创建。

![](/assets/images/receive-2.png)

进入 **Routes**，点击 **Add your first route**。

![](/assets/images/receive-3.png)

按下图所示完成配置，点击 **Create route**。

::: danger 重要
请勿将 NAME 与 ENDPOINT 设置为相同值，否则会导致邮件无限循环转发。
:::

![](/assets/images/receive-4.png)
