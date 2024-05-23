// creating an element is job of reactDOM
// second parameter of createElement keeps the attributes to a tab
// third parameter can be a single child or an array of chiidren 

const heading = React.createElement("h1", { id: "heading" }, "I am h1 tag!");
const subheaading = React.createElement("h2", { id: "subheaading" }, "I am h2 tag!");
const child  = React.createElement("div", { id: "child" }, [heading, subheaading]);
const parent  = React.createElement("div", { id: "parent" }, child);

// creating a root is job of reactDOM, this ensures that heading gets converted to h1 tag
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)