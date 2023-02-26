/**
 * 23-02-12 시작
* [ContextAPI]: 상태관리용, redux같은기능, 전역영역으로 부모(props)안거치고 다른가지의 노드로 바로이동
contexts폴더 -> colour.js(component아니라 소문자시작, createContext) -> ColourBox.js 
[ColourContext.Provider] Context의 value값 수정 가능, value정의는 필수값임

 */

import './App.css';
import ColourBox from './components/ColourBox';
import SelectColours from './components/SelectColours';
import ColourContext, { ColourPorvider } from './contexts/colour';

// function App() {
//   return (
//     <ColourContext.Provider value={{colour:'red'}}>
//       <div>
//         <ColourBox/>
//       </div>
//     </ColourContext.Provider>
//   );
// }

/** [value를 Update할때는? 동적일때]: colour.js(ColourPorvider) -> ColourBox.js ->
 * [왼클릭 colour, 우클릭시 subcolour 색상변경]: SelectColours.js
 * [useContext hook사용] : ColourBox.js
 * */ 
function App() {
  return (
    <ColourPorvider>
      <div>
        <SelectColours/>
        <ColourBox/>
      </div>
    </ColourPorvider>
  );
}
/** 

  Redux : vanila-redux로...
 */

export default App;
