// Bring React in to build a component.
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// create the root of the app by selection where the app should be mounted in the dom
const root = createRoot(document.getElementById('root'));

// Here is out base App component.
// Notice we are NOT using jsx here. This is because we have not set up babel yet.
//
// render the root element with the provided component
root.render(<App />);
