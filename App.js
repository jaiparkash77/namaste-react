import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
    "div", 
    { id: "parent" }, 
    [
        React.createElement(
            "div", 
            { id: "child" }, 
            [
                React.createElement(
                    "h1", 
                    { id: "heading" }, 
                    "Heading 1 is from react 🎈"
                ), React.createElement(
                    "h2", 
                    { id: "heading" }, 
                    "Heading 2"
                )
            ]
        ),
        React.createElement(
            "div", 
            { id: "child2" }, 
            [
                React.createElement(
                    "h1", 
                    { id: "heading" }, 
                    "Heading 1"
                ), React.createElement(
                    "h2", 
                    { id: "heading" }, 
                    "Heading 2"
                )
            ]
        )
    ]
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);