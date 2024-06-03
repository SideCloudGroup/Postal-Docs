import {defineConfig} from "vitepress";

export default defineConfig({
    title: "Postal",
    description: "Documentation for Postal",

    themeConfig: {
        search: {
          provider: "local",
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [],

        sidebar: {
            "/": [
                {text: "使用须知", link: "/index.md"},
                {
                    text: "开始使用",
                    items: [
                        {text: "创建服务器", link: "/start/create-server.md"},
                        {text: "绑定域名", link: "/start/add-domain.md"},
                    ],
                },
                {
                    text: "对接您的程序",
                    items: [
                        {
                            text: "V2Board",
                            link: "/interface/v2b.md",
                        },
                        {
                            text: "XBoard",
                            link: "/interface/xboard.md",
                        },
                        {
                            text: "SSPanel",
                            link: "/interface/ssp.md",
                        },
                        {
                            text: "WHMCS",
                            link: "/interface/whmcs.md",
                        },
                        {
                            text: "使用SMTP接口",
                            link: "/interface/smtp.md",
                        },
                        {
                            text: "使用API接口",
                            link: "/interface/api.md",
                        },
                    ],
                },
                {text: "收信配置", link: "/receive.md"},
                {
                    text: "其他",
                    items: [
                        {text: "加入TG频道", link: "https://t.me/+YIVBsxvXdCw4OWZh"},
                        {text: "手动群发", link: "https://github.com/SideCloudGroup/massmail"},
                        {text: "独享定制", link: "https://cloudsides.com/index.php/store/postal/postal-dedicated"},
                        {text: "联系技术支持", link: "https://t.me/SideCloudCSBot"},
                        {text: "[AD]AppleID自动解锁", link: "https://appleauto.pro"},
                    ]
                }
            ],
        },
    },
});
