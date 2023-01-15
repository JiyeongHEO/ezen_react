
import './App.css';
import TodoTemplate from './Components/TodoTemplate'
import TodoInsert from './Components/TodoInsert'
import TodoList from './Components/TodoList'


/*  
2023-01-15 시작
1. yarn add    sass classnames react-icons : plugin 3개 설치
SASS (Syntatically awesome style sheets): css전처리기. 심플하게,재활용성,코드보기쉬움 등등
classnames: 조건부 스타일링을 편하게..
react-icons: svg타입,아이콘용 라이브러리
-> .prettierrc추가 -> index.css수정 -> 아웃라인 : TodoTemplate, TodoInsert, TodoList, TodoListItem,  (아웃라인 참조)

-> Components폴더 -> TodoTemplate: comp는 대문자시작, classname(jsx) == Class(html) 
-> .scss 적용
-> TodoInsert시작: inline요소들 (vs block요소-공간잡을수있음), react-icons쓰임(https://react-icons.github.io/react-icons/icons?name=md ), css3가상클래스(::,:::,:로 모두호환가능하긴함..)

-> TodoListItem 과 TodoList



*/


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

export default App;
