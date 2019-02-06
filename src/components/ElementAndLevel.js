import React from 'react';
import LevelProgressGenerator from './LevelProgressGenerator';

function ElementAndLevel(props){
    return(
        <div className="ElementAndLevel">
            <p>{props.name}</p>
            <LevelProgressGenerator level={props.level}/>
        </div>
    )
}

export default ElementAndLevel;