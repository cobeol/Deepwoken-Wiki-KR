import React from 'react';
import CardContainer from './CardContainer';
import DocsCard from './DocsCard';
import styles from './HomeCard.module.css'

export default function HomeCard({children}) {
    let home_style = {
        marginBottom: '100px',
    }
    return (
        <div className={styles.wrapper}>
            {children}
            <CardContainer col={1} row={1} style={home_style}>
                <DocsCard title={"Talents"} desc={"재능 카드 설명"} url={"talents/"} style={undefined} />
            </CardContainer>
        </div>
    );
}