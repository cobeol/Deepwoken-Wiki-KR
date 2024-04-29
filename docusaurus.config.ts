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

    staticDirectories: ["public", "static"],

    url: "https://deepwoken.netlify.app",
    baseUrl: "/",

    organizationName: "cobeol",
    projectName: "Deepwoken-Wiki-KR",

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

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
            {
                name: "og:type",
                content: "website",
            },
            {
                name: "description",
                content: "딥워큰 한국어 위키입니다",
            },
            {
                name: "og:url",
                content: "https://deepwoken.netlify.app/",
            },
            {
                name: "twitter:title",
                content: "딥워큰 위키 KR",
            },
            {
                name: "twitter:description",
                content: "딥워큰 한국어 위키입니다",
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
                            to: "races",
                            label: "Races",
                        },
                        {
                            to: "attunement",
                            label: "Attunement",
                        },
                        {
                            to: "attributes",
                            label: "Attributes",
                        },
                    ],
                },
                {
                    label: "Skills",
                    position: "left",
                    items: [
                        {
                            to: "talents",
                            label: "Talents",
                        },
                        {
                            to: "mantras",
                            label: "Mantras",
                        },
                        {
                            to: "oaths",
                            label: "Oaths",
                        },
                        {
                            to: "resonance",
                            label: "Resonance",
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

    headTags: [
        {
            tagName: "script",
            attributes: {
                type: "application/ld+json",
            },
            innerHTML: JSON.stringify({
                "@context": "https://schema.org/",
                "@type": "Organization",
                name: "딥워큰 위키 KR",
                url: "https://deepwoken.netlify.app/",
            }),
        },
    ],
};

export default config;
