import { useState } from 'react';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';
import RefSample from './RefSample';

/*
2023-01-08 시작
  * [ hook ] 함수형
+) Counter.js : info.js와 비교( useState 자주 사용 성능 저하됨(e.target.value 요부분이 비효율적) )

2023-01-15 시작
+)두번읽는다. strict-mode(StrictMode), index.js에서 지우면안보임:  https://en.reactjs.org/docs/strict-mode.html

* [ hook1 - useEffect ]:  info.js 
+) ComponentDid'Mount/Update' : class형 comp생명주기
+) 1.class형일때(js): ComponentDidUpdate(prevProps, prevState){
  if( prevProps.value!==this.props.value ){ 어쩌고() }
 } 
나머지 hook은 useEffect와 구조 비슷함

+) [ hook2 - cleanUp ] 함수: 
Comp의 생명주기 중 unMount전이나 Update전 작업수행. 
 2.함수형일떄: class형에서 가져온 'useEffect'
useEffect(()=>{ 어쩌고 return()=>{ 여기 cleanUp } },[] )


* [ hook3 - useReducer ] : Counter.js, info.js
useState 보다 더 다양한 Comp의 다양한 update가능함. 
+) Reducer
'현재상태+업데이트위한 정보담은 action값'을 전달받아 새로운  상태반환 함수. 새로운상태는 반드시 '불변성'지켜야함. hook-method다. 밖의 함수라서 재사용성
 function( state, action ){ return { 어쩌고with 불변성+새로운상태 } }

* [ hook4 - useMemo ]: Average.js
렌더링 성능 최적화, 즉 특정값 바뀌었을때만 실행,그외는 이전값 그대로..
getAverage가 입력마다 호출됨 -> useMemo(),


* [ hook5 - useCallback ] : Average.js
렌더링 성능 최적화, 재사용 가능, onChange(컴포넌트가 처음 렌더링될때만!), onInsert([number, list] 가 바뀌었을때만!)

* [ hook6 - useRef ]: Average.js, RefSample.js
case1) dom직접접근때, case2)local변수로 사용때

* [Custom Hook]: useInputs.js -> Info.js에 적용
useReducer 사용 , https://nikgraf.github.io/react-hooks/ :다양한 custom Hooks

*[ Todo List ]: yarn create react-app todo-app 이동!

*/


function App() {

  const [visible, setvisible] = useState(false); //2023-01-15

  return (
    <div>
      <Counter/>
      <p>================================</p>
      {/* <Info/> */}    

      <div>   {/* 2023-01-15  cleanUp 진행 */}    
        <h2> useState를 여러번 사용하기 </h2>
        <button onClick={ ()=>{setvisible(!visible)} }> {visible? '숨기기':'보이기'} </button>
        <hr/>
        {visible &&  <Info/> }
      </div>
      <p>================================</p>
      <Average/> 
      <p>================================</p>
      <RefSample/> 
    </div>
  );
}

export default App;
