// creating an element is job of reactDOM
// second parameter of createElement keeps the attributes to a tab
// third parameter 

const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
const child  = React.createElement("div", { id: "child" }, heading);
const parent  = React.createElement("div", { id: "parent" }, child);

// creating a root is job of reactDOM, this ensures that heading gets converted to h1 tag
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)