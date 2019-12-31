import React from 'react';
import ReactDOM from 'react-dom';
import Stage from './Stage';
import renderer from 'react-test-renderer';

describe('Stage Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Stage 
            id= {123}
            name='Kitten'
            avatar= 'https://placekitten.com/200/287'
            inSession= {true}
            onStage= {true}
            />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the Stage UI as expected', () => {
        const foliage = renderer
        .create(<Stage 
            id= {123}
            name='Kitten'
            avatar= 'https://placekitten.com/200/287'
            inSession= {true}
            onStage= {true}
            />)
        .toJSON();
        expect(foliage).toMatchSnapshot();
    });
});