import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = props => {



    return (
        <div className='card-list'>
            { props.monsters.map(monster => <Card key={monster.id} name={monster.name} email={monster.email} id={monster.id}/>) }
        </div>
    );

}