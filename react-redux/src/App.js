import './App.css';
import Counter from './components/Counter';
import Todos from './components/Todos';
import CounterContainer from './containers/CounterContainer';
import TodosContainer from './containers/TodosContainer';


/**
 * 2023-02-19
 * 'yarn add redux react-redux'
 * 상태update로직을 모듈로 따로 -> 코드유지보수에 도움, 여러compo에서 상태공유, update필요한 compo만 ReRendering되도록함
* connect함수(redux기본제공 유틸)와 provider(comp, store을 props로 전달해야함) 사용하여 처리함
-> [.prettierrc추가]

-> [ 패턴 "'Presentaional컴포' & 'Container컴포'를 분리하는것" ] 
'Presentaional컴포'-상태관리 안하고 props만 받고보여줌, src/components에 저장  :Counter.js, Todos.js  &
'Container컴포'-redux와 연동. redux로 부터 상태받기, redux-store에 액션 dispatch함, src/containers에 저장 :CounterContainer.js, TodosContainer.js 

-> [일반적 구조]  :actions, constants, reducers  

vs *[ Duxs 패턴 ]: 일반적인구조를 기능별로 분리하여 하나의 파일에. 모듈: modules폴더 -> counter.js, todos.js 
-> reducer를 하나로 합쳐야함  :modules/index.js(root역할, [combineReducers])

-> [ provider(comp, store을 props로 전달해야함) ] + [composeWithDevTools() 확장프크 ] https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd  확장 추가 + 'yarn add redux-devtools-extension'  :index.js

->[ connect함수(redux기본제공 유틸)],[Container컴포 ] :containers폴더 -> CounterContainer.js, TodosContainer.js -> [ module로 삽입], [connect에서 중복제거 ]  :CounterContainer.js -> Counter 완성 + Todo 완성

* [액션생성 함수수정 redux-actions] 'yarn add redux-actions' 액션생성 함수를 더 줄임, switch문대신 handleActions( 첫번쨰는 update함수, 두번쨰는 initialState ), todos는 param있으므로 createActions의 두번째 함수에 action.payload로 모두 접근가능-> 가독성위해 비구조화할당으로 수정 :modules폴더

*/
function App() {
  return (
    <div>
        <CounterContainer />
        <hr/>
        <TodosContainer/>
    </div>
  
  );
}

/* 
* [immer활용 - produce, draft]  yarn add immer, 복잡하지 않은 counter는 안함  :modules폴더

*/

/*
 * 2023-02-26
1.[useSelector] [connect]대신 상태조회, const 결과 = useSelector(상태선택 함수):  CounterContainer.js
2.[useDispatch] 로 액션 발생시킴, const dispatch = useDispatch(); dispatch({type:'액션이름'})
-> 문제) increase(),decrease()가 계속 재렌더링됨 -> [useCallback] onIncrease, onDecrease로 변경:  CounterContainer.js
+) [connect]: 부모comp~ 리렌더링시 얘 props안바뀌었으면 리렌더링 안해서 성능최적화됨!
vs [useSelector]: 성능최적화안되서... React.memo 사용 필요 : CounterContainer.js

3.[useStore] store에 직접접근(흔하진 않음), const store=useStore(); store.dispatch({type:'액션이름'}); store.getState(): 안함ㅋ

4.[useActions] (https://react-redux.js.org/api/hooks#recipe-useactions) dispatch의 반복을 최적화, (param1-액션함수들, param2-배열이고 이 안의 요소 바뀌면 액션dispatch) : lib폴더에 useActions.js 추가, TodosContainer.js
*/

export default App;


/* 
*2023-02-26
*redux-미들웨어: yarn create react-app middleware 로 이동

*/
