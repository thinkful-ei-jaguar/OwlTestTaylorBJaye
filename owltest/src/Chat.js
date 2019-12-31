import React from 'react';

export default function Chat (props) {
    let date = new Date(props.timestamp).toTimeString();
    
    return (
        <div className="messages">
            <p>{props.participantId}</p>
            <p>{props.type}</p>
            <p>{date}</p>
        </div>
    )

}