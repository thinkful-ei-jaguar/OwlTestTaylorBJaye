import React from 'react';
import Chat from './Chat';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';

describe('Chat Component', () => {
    it('render without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Chat
            participantId={2}
            type="thumbs-up"
            timestamp={1548852484247}
            />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders Chat UI as expected', () => {
        const flower = renderer
        .create(<Chat
            participantId={2}
            type="thumbs-up"
            timestamp={1548852484247}
            />)
        .toJSON();
        expect(flower).toMatchSnapshot();
    });
});
