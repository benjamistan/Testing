import React from 'react';
import { shallow } from 'enzyme'; // see below Enzyme Render functions 
import App from 'components/App';
import CommentBox from 'components/CommentBox'; // we'll need this for comparison in our wrapped variable
import CommentList from 'components/CommentList';

// it(does something, test logic);
// expect(what we're inspecting).matchingStatement(value we expect to see);

// Enzyme API Renders
// ==================
// STATIC       just renders the HTML tags, no functionality
// SHALLOW      render does only one component without children
// FULL DOM     renders the component and all children for exploring interactions with the entire app

let wrapped;    // can't use const here because we reassign for each test

beforeEach(() => {
    wrapped = shallow(<App />);
});

it('shows exactly one CommentBox', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1); // Expecting the array returned by wrapped.find() to have one CommentBox
});

it('shows exactly one CommentList', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});
