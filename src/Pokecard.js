import React from 'react';
import './Pokecard.css';

const Pokecard = (props) => {
    return (
        <div className="card">
            <h1 className="title">{props.name}</h1>
            <img src={props.img} alt={props.name} />
            <p>{`Type: ${props.type}`}</p>
            <p className="last">{`EXP: ${props.base_experience}`}</p>
        </div>
    );
}

export default Pokecard;