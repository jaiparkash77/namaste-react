import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurnatMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic import

const Grocery = lazy(()=> import("./components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            {/* Outlet will be filled according to path defined in children of AppLayout */}
            <Outlet />
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurnatMenu />
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);