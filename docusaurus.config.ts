import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

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
                    routeBasePath: "/",
                    remarkPlugins: [remarkMath],
                    rehypePlugins: [rehypeKatex],
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
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
                { to: "/talents", label: "Talents", position: "left" },
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
    } satisfies Preset.ThemeConfig,
};

export default config;
