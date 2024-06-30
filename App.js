/*
*
*<div id="parent">
*    <div id="child">
*        <h1>Heading 1</h1>
*       <h2>Heading 2</h2>
*    </div>
*    <div id="child2">
*        <h1>Heading 1</h1>
*       <h2>Heading 2</h2>
*    </div>
*</div>
*
*/
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
                    "Heading 1"
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