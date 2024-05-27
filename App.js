import React from "react";
import ReactDOM from 'react-dom/client';

// React Components
// Class Based Components - OLD
// Functional Components - NEW

// React Functional Copmponent is a function that returns a react elements
const SubHeadingComponent = () => <h2> Hello Sub React Functional Component</h2>

// Component Composition
const HeadingComponent = () => (
    <div>
        <h1> Hello React Functional Component</h1>
        <SubHeadingComponent />
    </div>)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent/>
)