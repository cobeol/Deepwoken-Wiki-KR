import React from "react";
import styles from "./ImageText.module.css";

export default function ImageText({ top, content }) {
    let onImageStyle: React.CSSProperties = {
        top: top,
    };
    return (
        <span className={styles.onImage} style={onImageStyle}>
            {content}
        </span>
    );
}
