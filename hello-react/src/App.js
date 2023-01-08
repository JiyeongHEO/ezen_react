// import React from "react";
// import MyComponent from "./MyComponent";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice from "./EventPractice"; //1.


// const App = () => {
//   return (
//     <div>

//       {/* <div><MyComponent name="hello">리액트!</MyComponent>;</div>
//       <div><Counter name="hello"/></div>
//       <div><Say/></div> */}

//       {/*2023-01-08
//       <div><EventPractice/></div> */}
//        <div><EventPractice/></div> 

//     </div>
//   )


// };

// export default App;



//2023-01-08 
import React, {Component} from "react";
import './App.css';
import ValidationSample from "./ValidationSample"; //2.
import ScrollBox from "./ScrollBox"; //3.
import IterationSample from "./IterationSample"; //4



class App extends Component {
  render(){
    return (
      <div>
        
        <div><IterationSample/></div>
        
        <h1>Dom에 접근하기</h1>
        <ValidationSample />

        <h1>스크롤박스</h1>
        <ScrollBox ref={ref=>this.scrollbox= ref}/>
        <button onClick={() => this.scrollbox.scrolltoBottom()} >끝까지열기</button>

      </div>
    
    )
  }
};

export default App;