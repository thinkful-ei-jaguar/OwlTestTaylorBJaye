import React from 'react';
import './participant.css';

export default function Participant (props) {
    let p;
    if(props.onStage)
        p = 'onStage';
    else if(props.inSession)
        p = 'inSession';
    else
        p = 'Left Session';
    return (
        <div>
            <div className="session-participant">
                <img src = {props.avatar} alt={props.name} className="user-avatar"></img>
            </div>
            <div className="participant-info">
                <h6 className="participant-name">{props.name}</h6>
                <div className="participant-status participant-status__green">
                    {p}
                </div>
            </div>
        </div>
    )
}