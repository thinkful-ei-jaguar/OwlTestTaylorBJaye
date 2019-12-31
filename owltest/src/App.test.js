import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    const main = document.createElement('main');
    ReactDOM.render(<App participantStore = {[{
      id: 123,
      name: 'Kitten',
      avatar: 'https://placekitten.com/200/287',
      inSession: true,
      onStage: true
    }]}/>, main);
    ReactDOM.unmountComponentAtNode(main);
  });
/*
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<App object = {[{
        id: 123,
        name: 'Kitten',
        avatar: 'https://placekitten.com/200/287',
        inSession: true,
        onStage: true
      }]}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  */
});
