import React from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";


const App = () => {
  return (
    <div>

      <div><MyComponent name="hello">리액트!</MyComponent>;</div>
      <div><Counter name="hello"/></div>
      <div><Say/></div>

    </div>
  )


};

export default App;