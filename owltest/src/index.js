import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import participantStore from './participantStore';
import chatStore from './chatStore';
import './index.css';

ReactDOM.render(<App participantStore = {participantStore} chatStore = {chatStore}/>, document.getElementById('root'));