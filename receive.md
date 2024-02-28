# 收信配置

**如果你不需要收信功能，请忽略此章节。**

邮局不提供收信协议，但可以实现收到邮件有转发到某个邮箱的功能。这里提供了一个简单的方法，可以实现收信功能。

在邮局服务器中点击 `Routing`

![](/assets/images/receive-1.png)

点击 `Add an address endpoint` ，然后填入自己的邮箱，确认创建

![](/assets/images/receive-2.png)

点击 `Routes` - `Add your first route`

![](/assets/images/receive-3.png)

然后按如图所示配置，点击 `Create route`

**<span style="color:red;">请勿设置NAME与ENDPOINT相同，这将导致邮件无限循环</span>**

![](/assets/images/receive-4.png)