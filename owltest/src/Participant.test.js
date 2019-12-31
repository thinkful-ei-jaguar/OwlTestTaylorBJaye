import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import App from './App';
import Participant from './Participant';

describe('Participant Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Participant
      id= {123}
      name='Kitten'
      avatar= 'https://placekitten.com/200/287'
      inSession= {true}
      onStage= {true}
    />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the Participant UI as expected', () => {
    const tree = renderer
      .create(<Participant
        id= {123}
        name='Kitten'
        avatar= 'https://placekitten.com/200/287'
        inSession= {true}
        onStage= {true}
      />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
  /*
  it('should be a leap year if divisible by 4, not 100', () => {
    let input = <Participant
        id= {123}
        name='Kitten'
        avatar= 'https://placekitten.com/200/287'
        inSession= {true}
        onStage= {true}
        />;
    const expectedOutput = 'onStage';
    const actualOutput = Participant(input);
    expect(actualOutput).toBe(expectedOutput);
  });
  */  
});
