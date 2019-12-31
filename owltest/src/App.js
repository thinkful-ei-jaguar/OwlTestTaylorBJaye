import React, {Component} from 'react';
import { render } from 'react-dom';
import Participant from './Participant';
import Chat from './Chat';
import Stage from './Stage';
import './App.css';

class App extends Component {
  static defaultProps = {
    participants: {},
    chat: {}
  };

  render() {
    const participants = this.props.participantStore;
    const chat = this.props.chatStore;

    return (
      <main className='App'>
        <div className="chat-list">
          {chat.map(message => (
            <Chat 
              participantId={message.participantId}
              type={message.type}
              timestamp={message.timestamp}
            />
          ))}
        </div>
        <div className="participants-list">
          {participants.map(person => (
            <Participant
              key={person.id}
              name={person.name}
              avatar={person.avatar}
              inSession={person.inSession}
              onStage={person.onStage}
            />
          ))}
        </div>
        <div className='stageBox'>
        {participants.map(person => (
            <Stage
              key={person.id}
              name={person.name}
              avatar={person.avatar}
              inSession={person.inSession}
              onStage={person.onStage}
            />
          ))}
        </div>

      </main>
    );
  }
}

export default App;