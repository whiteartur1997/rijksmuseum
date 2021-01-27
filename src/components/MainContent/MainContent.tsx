import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiRequests } from "../../api/api";
import { AppStateType, requestCards } from "../../store/app-reducer";
import Card from "./Card/Card";

type MainContentType = {
   cards: any[]
}

const MainContent: React.FC<MainContentType> = ({ cards }) => {

    return(
        <div>
            {
                cards.map((c) => {
                    <Card content={c} />
                })
            }
        </div>
    )
}

export default MainContent;