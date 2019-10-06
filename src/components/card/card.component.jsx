import React from 'react';
import './card.styles.css';

export const Card = props => {

    console.log(props.id);

    return (
        <div className='card-container'>
            <img alt={props.name} src={`https://robohash.org/${props.id}?set=set2&size=180x180`}/>
            <h2>{props.name}</h2>
            <p>{props.email}</p>
        </div>
    );
}