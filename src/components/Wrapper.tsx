import React from "react";
import styles from "./Wrapper.module.css";

export default function Wrapper({
    width,
    alignItems,
    justifyContent,
    children,
}) {
    let wrapperStyle: React.CSSProperties = {
        justifyContent: justifyContent,
        alignItems: alignItems
    }
    return <div className={styles.wrapper} style={wrapperStyle}>{children}</div>;
}                           
