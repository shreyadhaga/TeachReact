  // creating an element is job of reactDOM
  const heading = React.createElement("h1" , {}, "Hello World from React!");
  // creating a root is job of reactDOM
  const root  =  ReactDOM.createRoot(document.getElementById('root'))
  root.render(heading)