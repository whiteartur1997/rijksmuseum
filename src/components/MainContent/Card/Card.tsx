import React from 'react';

type CardType = {
    image: string
    descr: string
}

const Card: React.FC<CardType> = (props) => {
    return(
        <div>
            <img src={props.image} />
            <span>{props.descr}</span>
        </div>
    )
}

export default Card;