import React from "react";
import ReactDOM from "react-dom/client";

// React.createElement => React Element - JS Object => HTMLElement(render)
const heading = React.createElement("h1", {id: "heading"}, "Namaste React 🎃");
console.log(heading);

// JSX - is not HTML is JS. It is HTML-like or XML-like syntax. (transpiled before it reaches the JS Engine) => Parcel - Babel
// JSX => React.createElement => React Element - JS Object => HTMLElement(render)
const jsxHeading = <h1 id="heading">Namaste react using JSX</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);