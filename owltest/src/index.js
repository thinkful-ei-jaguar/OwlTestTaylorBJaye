import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import participantStore from './participantStore';
import './index.css';

ReactDOM.render(<App participantStore = {participantStore}/>, document.getElementById('root'));