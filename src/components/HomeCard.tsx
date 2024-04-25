import React from "react";
import CardContainer from "./CardContainer";
import DocsCard from "./DocsCard";
import styles from "./HomeCard.module.css";

export default function HomeCard({ children }) {
    let home_style = {
        marginBottom: "0px",
    };
    return (
        <div className={styles.wrapper}>
            {children}
            <CardContainer col={3} row={4} style={home_style}>
                <DocsCard   
                    title={"Talents"}
                    desc={"재능"}
                    url={"talents/"}
                    style={undefined}
                />

                <DocsCard
                    title={"Mantras"}
                    desc={"스킬"}
                    url={"mantras/"}
                    style={undefined}
                />

                <DocsCard
                    title={"Aattunement"}
                    desc={"조율"}
                    url={"attunement/"}
                    style={undefined}
                />

                <DocsCard
                    title={"Oaths"}
                    desc={"맹세"}
                    url={"oaths/"}
                    style={undefined}
                />  

                <DocsCard
                    title={"Resonance"}
                    desc={"벨"}
                    url={"resonance/"}
                    style={undefined}
                />

                <DocsCard
                    title={"Attributes"}
                    desc={"스텟"}
                    url={"attributes/"}
                    style={undefined}
                />

                <DocsCard
                    title={"Races"}
                    desc={"종족"}
                    url={"races/"}
                    style={undefined}
                />

                <DocsCard
                    title={"Equipment"}
                    desc={"장비"}
                    url={"equipment/"}
                    style={undefined}
                />

                <DocsCard
                    title={"Weapons"}
                    desc={"무기"}
                    url={"weapons/"}
                    style={undefined}
                />

                <DocsCard
                    title={"Enchantments"}
                    desc={"인챈트"}
                    url={"enchantments/"}
                    style={undefined}
                />

                <DocsCard
                    title={"Fishing"}
                    desc={"낚시"}
                    url={"fishing/"}
                    style={undefined}
                />

                <DocsCard
                    title={"Alchemy"}
                    desc={"물약"}
                    url={"alchemy/"}
                    style={undefined}
                />
            </CardContainer>
        </div>
    );
}
