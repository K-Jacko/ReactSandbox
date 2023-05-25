import React from 'react';
import ReactDOM from 'react-dom/client';

function Greeting()
{
    return React.createElement('div', {}, React.createElement('h2', {}, 'Hi World, Im in a div'))
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Greeting></Greeting>);
