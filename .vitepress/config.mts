import {defineConfig} from "vitepress";

export default defineConfig({
    title: "Postal 邮局",
    description: "Postal 邮局服务使用文档",

    themeConfig: {
        search: {
          provider: "local",
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [],

        sidebar: {
            "/": [
                {text: "概览", link: "/index.md"},
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
                            text: "SMTP 对接（推荐）",
                            link: "/interface/smtp.md",
                        },
                        {
                            text: "V2Board",
                            link: "/interface/v2b.md",
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
                            text: "API 对接",
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
