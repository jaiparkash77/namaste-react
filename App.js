import React from "react";
import ReactDOM from "react-dom/client";

// React Element
const heading = (
    <h1 id="heading">
        Namaste React using JSX. This is react element
    </h1>
);

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component

const Title = () => (
    <h1 id="heading">
        Namaste React using JSX
    </h1>
);

const HeadingComponent = () =>{
    return <h1>Namaste React Functional Component</h1>
}

const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>;

// Component Composition - composing multiple component into single
const HeadingComponent3 = () => (
    <div id="container">
        {heading}
        <Title />
        {Title()}
        <Title></Title>
        <h1>Namaste React Functional Component</h1>
    </div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering react element
// root.render(heading);

// Rendering react component
root.render(<HeadingComponent3 />);