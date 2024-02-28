# 绑定域名

在面板内，你可以看到邮件服务器，如图`MailServer`所示。点击进入。

![](/assets/images/mail-server.png)

点击 "Domain" 绑定发信域名，点击 `Add Domain` 添加你要用于发信的域名。

![](/assets/images/add-domain-1.png)

这里建议添加一级域名，解析发信不会影响网站解析。

![](/assets/images/add-domain-2.png)

完成添加后，需要验证域名所有权。

添加一条解析，类型**TXT**，子域为 **@**，记录值为**灰色框内全部内容**

![](/assets/images/add-domain-txt.png)

完成上方解析后，点击 `Verify TXT record` ，进入下一步的解析

![](/assets/images/domain-dns.png)

请按照提示添加域名解析，完成后点击 `Check my records are correct` 。如有不通过，请检查解析是否正确。解析可能需要30秒左右生效。