
import './App.css';
import TodoTemplate from './Components/TodoTemplate'
import TodoInsert from './Components/TodoInsert'
import TodoList from './Components/TodoList'
import { useCallback, useReducer, useRef, useState } from 'react';


/*  
2023-01-15 시작
1. yarn add    sass classnames react-icons : plugin 3개 설치
SASS (Syntatically awesome style sheets): css전처리기. 심플하게,재활용성,코드보기쉬움 등등
classnames: 조건부 스타일링을 편하게 하기위함
react-icons: svg타입,아이콘용 라이브러리
-> .prettierrc추가 -> index.css수정 -> 아웃라인 : TodoTemplate, TodoInsert, TodoList, TodoListItem,  (아웃라인 참조)

-> Components폴더 -> TodoTemplate: comp는 대문자시작, classname(jsx) == Class(html) 
-> .scss 적용
-> TodoInsert시작: inline요소들 (vs block요소-공간잡을수있음), react-icons쓰임(https://react-icons.github.io/react-icons/icons?name=md ), css3가상클래스(::,:::,:로 모두호환가능하긴함..)

-> TodoListItem 과 TodoList */
/*
function App() {

  return (
    <div >
      
      <TodoTemplate>
        <TodoInsert/>
        <TodoList/>
      </TodoTemplate>
    
    </div>
  );
}
*/


/** ******* 2023-01-29 시작  *******
* todos추가함 ->list -> TodoListItem ->TodoInsert + console.log대신.... 리액트개발자도구 확장프그: https://chrome.google.com/webstore/search/react%20developer  
-> [App: onInsert기능- useRef사용(case2 로컬변수. 재사용), onInsert -> TodoInsert로]
-> [App: onRemove 기능(filter사용) -> todoList -> listItem ]
-> [App: onToggle -> todoList ->listItem ]

function App() {

   const [todos, setTodos] = useState([
    {
      id:1,
      text:'React Basics..',
      checked: true
    },
    {
      id:2,
      text:'Styling..',
      checked: true
    },
    {
      id:3,
      text:'making todo app..',
      checked: false
    }
  ]);

  const nextId = useRef(4)  //다음 id값
  const onInsert = useCallback( 
    (text)=> {
      const todo = { id: nextId.current, text ,checked:false};
      setTodos(todos.concat(todo));
      nextId.current++
    }, [todos]
  )

  const onRemove = useCallback( 
    (id)=> {
      setTodos(todos.filter((td)=> td.id !== id)) 
    }, [todos]
  )

  
  const onToggle = useCallback(  //upUpdate
    (id)=> {
      setTodos(todos.map( (td)=> td.id === id? {...td, checked:!td.checked} : td  )) 
    }, [todos]
  )

  return (
    <div >
      
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    
    </div>
  );
}
*/

/*
* 최적화1
  # 언제 Component가 ReRendering하냐? 1.전달받은 props가 변경될때 2.내 state변경시 3.부모가 리렌더링될때 4.forceUpdate()실행시, createBulkTodos -> devtool 속도확인(느려짐)
  # devTool의 profile로 성능체크 -> #todolistItem, react.memo로 성능 최적화 (class형일시: shouldComponentUpdate에서) - props안바꼈으면 리렌더링 안 하게 설정가능...으로는 부족
*/
 
// function createBulkTodos(){
//   const arr = []
//   for(let i=0; i<=2500; i++){
//     arr.push({
//       id:i, text: `${i}번째 할 일`, checked: false
//     })
//   }
//   return arr
// }

// function App() {

//   const [todos, setTodos] = useState(createBulkTodos); //createBulkTodos()가 아닌이유: 재렌더링 피하려고

//   const nextId = useRef(2501)  //다음 id값
//   const onInsert = useCallback( 
//     (text)=> {
//       const todo = { id: nextId.current, text, checked:false};
//       setTodos(todos.concat(todo));
//       nextId.current++
//     }, [todos]
//   )

//   const onRemove = useCallback( 
//     (id)=> {
//       setTodos(todos.filter((td)=> td.id !== id)) 
//     }, [todos]
//   )

  
//   const onToggle = useCallback(  //upUpdate
//     (id)=> {
//       setTodos(todos.map( (td)=> td.id === id? {...td, checked:!td.checked} : td  )) 
//     }, [todos]
//   )

//   return (
//     <div >
      
//       <TodoTemplate>
//         <TodoInsert onInsert={onInsert}/>
//         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>  
//       </TodoTemplate>
    
//     </div>
//   );
// }

/** 
 * 최적화2 - 실행1
 *  + useState의 함수형 update기능 추가사용: 
      const [num, seNum] = useState(0)   // seNum의 함수화 즉 기능이있음
      const onIncrease = useCallback( ()=> seNum(preNum => preNum+1), [])  <- 여기. 즉 두번째인자[] 필요없음!
  
  + useReducer를 추가사용: useState보다 다양한 상황,다양한 값으로 업데이트 가능
 */
// function createBulkTodos(){
//   const arr = []
//   for(let i=0; i<=2500; i++){
//     arr.push({
//       id:i, text: `${i}번째 할 일`, checked: false
//     })
//   }
//   return arr
// }


// function App() {

//   const [todos, setTodos] = useState(createBulkTodos); //createBulkTodos()가 아닌이유: 재렌더링 피하려고

//   const nextId = useRef(2501)  //다음 id값
//   const onInsert = useCallback( 
//     (text)=> {
//       const todo = { id: nextId.current, text, checked:false};
//       setTodos(todos => todos.concat(todo)); //여기
//       nextId.current++
//     }, []
//   )

//   const onRemove = useCallback( 
//     (id)=> {
//       setTodos(todos => todos.filter((td)=> td.id !== id)) 
//     }, []
//   )

//   const onToggle = useCallback(  //upUpdate
//     (id)=> {
//       setTodos(todos =>  todos.map( (td)=> td.id === id? {...td, checked:!td.checked} : td  )) 
//     }, []
//   )

//   return (
//     <div >
      
//       <TodoTemplate>
//         <TodoInsert onInsert={onInsert}/>
//         <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>  
//       </TodoTemplate>
    
//     </div>
//   );
// }

/** 
 * 최적화2 - 실행2
  + useReducer를 추가사용
  끝!!!
  immr로 이동
 */
function createBulkTodos(){
  const arr = []
  for(let i=0; i<=2500; i++){
    arr.push({
      id:i, text: `${i}번째 할 일`, checked: false
    })
  }
  return arr
}

 function todoReducer(todos, action){  //여기
  switch(action.type){
    case 'INSEDRT':
      return todos.concat(action.todo)
    case 'REMOVE':
      return todos.filter((td)=> td.id !== action.id)
    case 'TOGGLE':
    return todos.map( (td)=> td.id === action.id? {...td, checked:!td.checked} : td  )
    default: return todos;
  }
 }

function App() {

  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos); //createBulkTodos()가 아닌이유: 재렌더링 피하려고

  const nextId = useRef(2501)  //다음 id값
  const onInsert = useCallback( 
    (text)=> {
      const todo = { id: nextId.current, text, checked:false};
      dispatch({type:'INSERT', todo});
      nextId.current++
    }, []
  )

  const onRemove = useCallback( 
    (id)=> {
      dispatch({type:'REMOVE', id});
    }, []
  )

  const onToggle = useCallback(  //Update
    (id)=> {
      dispatch({type:'TOGGLE', id});  
    }, []
  )

  return (
    <div >
      
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>  
      </TodoTemplate>
    
    </div>
  );
}

/** 
 * 최적화2 - 실행3
 yarn add react-virtualized :  렌더링 최적화. <List~>사용가능. TodoList.js, TodoListItem.js+scss
 */

export default App;

