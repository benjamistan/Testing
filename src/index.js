import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'Root';

import App from 'components/App';


// Provider component renders redux store available to components inside the App
ReactDOM.render(
    <Root>
        <App />
    </Root>
    , document.querySelector('#root'));