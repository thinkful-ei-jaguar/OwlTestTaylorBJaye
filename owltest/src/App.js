import React, {Component} from 'react';
import { render } from 'react-dom';
import Participant from './Participant';
import Stage from './Stage';
import './App.css';

class App extends Component {
  static defaultProps = {
    participants: {}
  };

  render() {
    const participants = this.props
    return (
      <main className='App'>

        <div className="participants-list">
          {participants.participantStore.map(person => (
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
        {participants.participantStore.map(person => (
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