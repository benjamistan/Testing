import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root'; // creating a dummy redux store to wrap components with

// FULL rendering mounts the object in the JSDOM, so it may need to be unmounted as cleanup

let wrapped; 

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {            // change is the event, not the handle called (i.e. onChange).
            target: { value: 'new comment' }
        });
        wrapped.update();                                        // forces update
    });

    it('has a text area that users can type in', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    });

    it('empties the input after submit', () => {
        wrapped.find('form').simulate('submit');                // simulating a form submit
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual(''); //checking the value of the textarea is reset to ''.
    });
});