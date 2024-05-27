import React from "react";
import ReactDOM from 'react-dom/client';

// React Components
// Class Based Components - OLD
// Functional Components - NEW

// React Functional Copmponent is a function that returns a react elements
const Title = () => (
    <h1>
        This title is a react element
    </h1>
)

// Component Composition
const HeadingComponent = () => (
    <div>
        <Title />
        <h1> This is the heading</h1>
    </div>)

// JSX Satitizes Data - Handles cross site scripting attacks
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />
)