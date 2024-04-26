import React from "react";
import styles from "./Text.module.css";

export default function Text({ top, content }) {
    let onImageStyle: React.CSSProperties = {
        top: top,
    };
    return (
        <span>
            {content}
        </span>
    );
}
