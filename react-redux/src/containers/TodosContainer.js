import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { useActions } from '../lib/useActions';
import {changeInput, insert, toggle, remove} from '../modules/todos';

/* 2023-02-19 
*/

// const TodosContainer = ({ input,todos,   changeInput,insert,toggle,remove }) => {
//     console.log("콘테이너2 Todos")

//     return (
//       <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />
//     );
// }

// export default connect(  
//     ({ todos })=>({
//         input: todos.input,
//         todos: todos.todos
//     }),
//    { changeInput, insert, toggle, remove  }
// )(TodosContainer);


/*
 * 2023-02-26
4.[useActions] (https://react-redux.js.org/api/hooks#recipe-useactions) dispatch의 반복을 최적화: lib폴더에 useActions.js 추가, TodosContainer.js
*/
const TodosContainer = () => {
    console.log("콘테이너2 Todos")
   const {input,todos } = useSelector(({todos})=>({
    input: todos.input,  todos: todos.todos
   }))

//    const dispatch = useDispatch(); 
//    const onChageInput = useCallback(input => dispatch(changeInput(input)),  [dispatch])
//    const onInsert = useCallback(text => dispatch(insert(text)), [dispatch])
//    const onToggle= useCallback(id => dispatch(toggle(id)), [dispatch])
//    const onRemove = useCallback(id => dispatch(remove(id)), [dispatch])
   const [onChageInput,onInsert, onToggle, onRemove] = useActions(  //4.여기
    [changeInput,insert, toggle, remove], []
   )


    return (
      <Todos input={input} todos={todos}  onChangeInput={onChageInput} onInsert={onInsert} onToggle={onToggle} onRemove={onRemove} />
    );
}

export default React.memo(TodosContainer)  //여기 [useSelector]: 성능최적화안되서... React.memo 사용 필요,지금은 굳이 필요없음..부모comp에 리렌더링할거없어서