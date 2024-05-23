// creating an element is job of reactDOM
// second parameter of createElement keeps the attributes to a tab
// third parameter 
const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
console.log(heading)
// heading is an javascript object

// creating a root is job of reactDOM, this ensures that heading gets converted to h1 tag
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(heading)