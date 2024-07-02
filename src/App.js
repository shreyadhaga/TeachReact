import React, { useEffect } from "react";
import { createRoot } from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";


// Component Composition
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

// JSX Satitizes Data - Handles cross site scripting attacks
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<AppLayout />);
