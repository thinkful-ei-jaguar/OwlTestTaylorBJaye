import React from 'react';
import './Stage.css';

export default function Stage (props) {

    if(props.onStage) {
        return (
            <div className = 'graybackground'>
                <div className = 'person'>
                    <p>{props.name}</p>
                    <img src={props.avatar} alt = {props.name}></img>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className = 'nodisplay'></div>
        )
    }
}