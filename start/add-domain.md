# 绑定域名

在面板中找到邮件服务器（如图所示的 `MailServer`），点击进入。

![](/assets/images/mail-server.png)

在 **Domain** 页面点击 **Add Domain**，添加用于发信的域名。

![](/assets/images/add-domain-1.png)

建议添加一级域名，发信相关的 DNS 解析不会影响网站现有解析。

![](/assets/images/add-domain-2.png)

添加完成后，需要验证域名所有权。

## 验证域名所有权

添加一条 **TXT** 解析记录：子域为 **@**，记录值为面板灰色框内的**全部内容**。

![](/assets/images/add-domain-txt.png)

完成 TXT 解析后，点击 **Verify TXT record**，进入下一步 DNS 配置。

![](/assets/images/domain-dns.png)

按面板提示添加其余 DNS 记录，完成后点击 **Check my records are correct**。如有未通过的项，请检查解析是否正确；DNS 生效通常需要约 30 秒。
