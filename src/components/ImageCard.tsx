import React from "react";
import styles from "./ImageCard.module.css";
import Link from "@docusaurus/Link";

export default function ImageCard({
    img,
    url,
    width,
    height,
    children
}) {
    return (
        <div className={styles.project}>
            <Link to={url}>
                <div className={styles.imageCard}>
                    <img
                        src={require(`@site/static/img/${img}.png`).default}
                        width={width ? width : "100%"}
                        height={height ? height : "100%"}
                    />
                    {children}
                </div>
            </Link>
        </div>
    );
}
