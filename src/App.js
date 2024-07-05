import React from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Body from "./components/Body";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Header from "./components/Header";
import ResturantMenu from "./components/ResturantMenu";

// Component Composition
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/resturant/:resId',
                element: <ResturantMenu />
            }
        ],
        errorElement: <Error />
    },
])

// JSX Satitizes Data - Handles cross site scripting attacks
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<RouterProvider router={appRouter} />);
