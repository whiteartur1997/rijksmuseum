import React from "react";
import Card from "./Card/Card";

type MainContentType = {
    cards: any[]
}

const MainContent: React.FC<MainContentType> = (props) => {
    return(
        <div>
            {
                props.cards.map((c) => {
                    <Card content={c} />
                })
            }
        </div>
    )
}

export default MainContent;