import React from "react";
import styles from "./DocsCard.module.css";
import Link from "@docusaurus/Link";

export default function DocsCard({
    style,
    title,
    desc,
    url,
    noborder = false,
}) {
    return (
        <div className={styles.project}>
            <Link to={url}>
                <div className={styles.flex}>
                    <span className={styles.projectGitHub}>{title}</span>
                </div>  
                <p>{desc}</p>
            </Link>
        </div>
    );
}
