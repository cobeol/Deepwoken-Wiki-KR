import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";
import HomeCard from "../components/HomeCard";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title} KR
                </Heading>
                <p className="hero__subtitle">
                    <a href="https://deepwoken.fandom.com/wiki/Deepwoken_Wiki">
                        Deepwoken Wiki
                    </a>
                    를 참고하여 만들어진 사이트입니다!!
                </p>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout>
            <HomepageHeader />
            <main>
                <br />
                <HomeCard children={undefined}></HomeCard>
            </main>
        </Layout>
    );
}
