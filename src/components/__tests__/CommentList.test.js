import React from 'react';
import { mount } from 'enzyme';
import Root from 'root';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(() => {
    const initialState = {
        comments: ['Comment 1', 'Comment 2']
    }
    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('shows one li per comment', () => {
    console.log(wrapped.find('li').length);
});

