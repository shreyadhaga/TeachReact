import React from "react";
import ReactDOM from 'react-dom/client';

// React Element
const heading = React.createElement('h1', { id: 'heading' }, 'Hello World')

// JSX - Javascript Syntax to make reaact simpler to write its Syntaxtical Sugar it just ensures that code is like HTML/XML Syntax

const jsxHeading = <h1> Hello JSX </h1>
// jsxHeading is an react element
// parcel uses babel to transpile jsx to js which is understandable by browsers 
// to write JSX in multiple lines its mandatory to wrap it in ()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(jsxHeading)