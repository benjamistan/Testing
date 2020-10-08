import React from 'react';
import { mount } from 'enzyme';
import Root from 'root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{ name: 'Fetched #1' }, { name: 'Fetched #2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');

    // without the set timeout, this expect statement runs before axios/moxios can do its thing, causing the expect to fail
    // because there's not yet any data in there
    moxios.wait(() => {
        wrapped.update(); // updates mounted components with information retrieved from the click simulation
        expect(wrapped.find('li').length).toEqual(2);
        done(); // indicates to Jest that the test is finished at this point (otherwise it assumes it's still waiting)
        wrapped.unmount();
    });
    
});