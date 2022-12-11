import "./App.css";
import React, { Component } from "react";

//function App() {
//[1]-1
//const number = undefined;
//return number; 비추천 -> return {number || "it's undefined...|| 쓰기를추천"};
//return (
//jsx문법~
/*노트 <> :fragment *함수scope, var(호이스팅있음, undefined) vs let||const(더안전) * === :type까지체크 *true==1 *undefined == false */
//[1]-1  <> {number && <h1>this is a number</h1>} </> //(예외적으로)출력: 0
//[1]-1  <> {number || "it's undefined..."} </>
//);

//[1]-2 css
// const name = "???";
// const style = {
//   backgroundColor: "black",
//   color: "aqua",
//   fontSize: "48px",
//   fontWeight: "bold",
//   padding: "16px",
// };
// return <div style={style}>{name}</div>;
//[1]-2
// const name = "???";
// return <div className="secondStyle">{name}</div>;

//[1]-3 Component
// const name = "react01의 이름";
// return (
//   <div className="react01">
//     {name}
//     {/* 주석 - jsx영역 */}
//   </div>
// );
//}

//[1]-3 Component
class App extends Component {
  render() {
    const name = "react01의 이름";
    return <div className="react01">{name}</div>;
  }
}

export default App;
