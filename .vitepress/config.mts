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
            "/docs/": [
                {text: "使用须知", link: "/docs/index.md"},
                {text: "开始使用", link: "/docs/start.md"},
                {
                    text: "对接您的程序",
                    items: [
                        {
                            text: "V2Board",
                            link: "/docs/interface/v2b.md",
                        },
                        {
                            text: "SSPanel",
                            link: "/docs/interface/ssp.md",
                        },
                        {
                            text: "WHMCS",
                            link: "/docs/interface/whmcs.md",
                        },
                        {
                            text: "使用SMTP接口",
                            link: "/docs/interface/smtp.md",
                        },
                        {
                            text: "使用API接口",
                            link: "/docs/interface/api.md",
                        },
                    ],
                },
                {text: "收信配置", link: "/docs/receive.md"},
                {
                    text: "其他",
                    items: [
                        {text: "手动群发", link: "/docs/others/massmail.md"},
                        {text: "联系技术支持", link: "https://t.me/sidecloudmailsupport_bot"},
                        {text: "（推广）AppleID自动解锁", link: "https://appleautoo.pro"},
                    ]
                }
            ],
        },
    },
});
