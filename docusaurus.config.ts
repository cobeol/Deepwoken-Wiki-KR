import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

const currentYear = new Date().getFullYear();
const copyrightYear = currentYear !== 2024 ? `2024-${currentYear}` : "2024";

const config: Config = {
    title: "Deepwoken Wiki",
    favicon: "img/deepwoken.ico",

    // Set the production url of your site here
    url: "https://deepwoken.netlify.app",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "facebook", // Usually your GitHub org/user name.
    projectName: "docusaurus", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "kr",
        locales: ["kr"],
    },
    scripts: [
        {
            src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4633932086986290",
            async: true,
            crossorigin: "anonymous",
        },
    ],

    presets: [
        [
            "classic",
            {
                theme: {
                    customCss: "./src/css/custom.css",
                },
                docs: {
                    sidebarPath: "./sidebar.ts",
                    routeBasePath: "/",
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        algolia: {
            appId: "S0I9APG2B7",
            apiKey: "fb8d593111dfad0cae297c66c08cc346",
            indexName: "deepwoken_wiki",
        },
        metadata: [
            {
                name: "keywords",
                content: "deepwoken, 딥워큰, deepwoken wiki, 딥워큰 위키",
            },
            {
                name: "google-adsense-account",
                content: "ca-pub-4633932086986290",
            },
            {
                name: "google-site-verification",
                content: "FPh5qZ9UrLBw6l0Z5KJX_bLHYrsYcmpStp9BWeDHWGA",
            },
        ],
        navbar: {
            title: "Deepwoken Wiki KR",
            logo: {
                alt: "logo",
                src: "img/deepwoken.jpg",
            },
            items: [
                {
                    type: "doc",
                    docId: "home/index",
                    label: "Home",
                    position: "left",
                },
                {
                    label: "Character",
                    position: "left",
                    items: [
                        {
                            to: "talents",
                            label: "Talents",
                        },
                    ],
                },
                {
                    href: "https://github.com/cobeol/Deepwoken-Wiki-KR",
                    label: "GitHub",
                    className: "header-github-link",
                    position: "right",
                },
            ],
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
        colorMode: {
            defaultMode: "dark",
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        footer: {
            style: "dark",
            links: [],
            copyright: `Copyright © ${copyrightYear} <a href="https://github.com/cobeol">코벌</a>. Licensed under CC BY-SA 4.0. <a href="https://deepwoken.fandom.com/wiki/Rules">(Referenced Docs)<a>`,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;
