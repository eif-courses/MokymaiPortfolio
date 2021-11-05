const {config} = require("vuepress-theme-hope");

module.exports = config({
    title: "Programuoki.lt",
    description: "Pradėti mokintis niekada nevėlu",

    dest: "./dist",

    head: [],
    locales: {
        "/": { lang: "en-US" }
    },
    themeConfig: {
        logo: "/logo.jpg",
        hostname: "https://programuoki.lt/",
        author: "M. Gžegoževskis",
        repo: "https://github.com/eif-courses",
        nav: [
            {text: "Pradžia", link: "/", icon: "home"},
            {text: "Projektai", link: "/home/", icon: "software"},
            {
                text: "Java",
                icon: "java",
                link: "/java/",
            },
            {
                text: "Testavimas",
                icon: "tool",
                link: "/testing/",
            },
            {
                text: "C/C++",
                icon: "code",
                link: "/cpp/",
            }
        ],
        sidebar: {
            "/java/": [
                {
                    title: "Programavimo kalba Java",
                    collapsable: false,
                    children: [
                        "",
                        "staticfinal" /* /foo/two.html */,
                        "isimtys",
                        "kolekcijos",
                        "parametrizuoti",
                        "anotacijosirjavadocs",
                        "lambda",
                        "junit",
                        "gui",
                        "spring",
                        "restapi",
                        "regex"
                    ]
                },
                {
                    title: "Projektavimo šablonai",
                    collapsable: false,
                    children: [
                        "objektukurimo",
                        "strukturinissablonas",
                        "elgsenos"
                    ]
                },
                {
                    title: "Gilinti žinioms",
                    collapsable: false,
                    children: [
                        "projektukurimoirankiai",
                        "kotlinjvm",
                        "android"
                    ]
                }
            ],
            "/cpp/": [
                {
                    title: "Programavimo kalba C/C++",
                    collapsable: false,
                    children: [
                        "",
                        "duomenutipai",
                        "operatoriai",
                        "salygos",
                        "ciklosakiniai",
                        "funkcijos",
                        "klases"
                    ]
                }
            ],
            "/testing/": [
                {
                    title: "Automatiniai testai (Teorija)",
                    collapsable: false,
                    children: [
                        "",
                        "junit",
                        "irangosparuosimas"
                    ]
                },
                {
                    title: "Selenium įrankis",
                    collapsable: false,
                    children: [
                        "seleniumwebdriver",
                        "selokatoriai",
                        "manipuliavimas",
                        "stabdymas",
                        "javascript",
                        "pageloadingstart"
                    ]
                },
                {
                    title: "Automatinių testų tipai",
                    collapsable: false,
                    children: [
                        "regressiontest",
                    ]
                },
                {
                    title: "Įvairūs pavyzdžiai Selenium",
                    collapsable: false,
                    children: [
                        "pavyzdziai/login",
                        "pavyzdziai/iframe",
                        "pavyzdziai/bug",
                        "pavyzdziai/seleniumide",
                        "pavyzdziai/captchatestas",
                        "pavyzdziai/dropdown"
                    ]
                }
            ],
        },
        blog: {
            intro: "/home/",
            sidebarDisplay: "mobile",
            links: {
                Youtube: "https://www.youtube.com/channel/UCZKHiQ-VqHQGc8pzuWArK4A",
                Discord: "https://discord.gg/jH5t4tbhqY",
                Github: "https://github.com/eif-courses",
                Email: "mailto:m.gzegozevskis@gmail.com"

            },
        },

        footer: {
            display: true,
            content: "默认页脚",
        },

        comment: {
            type: "waline",
            serverURL: "https://komentuok.vercel.app/",
        },

        copyright: {
            status: "global",
        },

        git: {
            timezone: "Asia/Shanghai",
        },

        mdEnhance: {
            tex: true,
            demo: true,
        },

        pwa: {
            favicon: "/favicon.ico",
            cachePic: true,
            apple: {
                icon: "/assets/icon/apple-icon-152.png",
                statusBarColor: "black",
            },
            msTile: {
                image: "/assets/icon/ms-icon-144.png",
                color: "#ffffff",
            },
            manifest: {
                icons: [
                    {
                        src: "/assets/icon/chrome-mask-512.png",
                        sizes: "512x512",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-mask-192.png",
                        sizes: "192x192",
                        purpose: "maskable",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-512.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                    {
                        src: "/assets/icon/chrome-192.png",
                        sizes: "192x192",
                        type: "image/png",
                    },
                ],
                shortcuts: [
                    {
                        name: "programuoki.lt",
                        short_name: "Programuoki.lt",
                        url: "/java/",
                        icons: [
                            {
                                src: "/assets/icon/guide-maskable.png",
                                sizes: "192x192",
                                purpose: "maskable",
                                type: "image/png",
                            },
                            {
                                src: "/assets/icon/guide-monochrome.png",
                                sizes: "192x192",
                                purpose: "monochrome",
                                type: "image/png",
                            },
                        ],
                    },
                ],
            },
        },
    },
});
