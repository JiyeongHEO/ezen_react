
import React, { useCallback } from 'react';
import { List } from 'react-virtualized';

import './TodoList.scss'
import TodoListItem from './TodoListItem';


// const TodoList = () => {

//     return (
//         <div className='TodoList'>
//             <TodoListItem/>
//             <TodoListItem/>
//             <TodoListItem/>
//         </div>
//     );
// };

/*2023-01-29 */
// const TodoList = ({todos, onRemove, onToggle}) => {

//     return (
//         <div className='Todolist'>
//             {todos.map((td)=> ( 
//                 <TodoListItem todo={td} key={td.id} onRemove={onRemove} onToggle={onToggle}/>
//                 ))
//             }
//         </div>
//     );
// };

/*  최적화2 - 실행3 
react-virtualized 
    rowRender -> <List ~ 에 씀>
*/
const TodoList = ({todos, onRemove, onToggle}) => {

    const rowRender = useCallback(({ index, key, style}) => {  //arg 값 고정임
        const todo = todos[index];
        return (
            <TodoListItem todo={todo} key={key} onRemove={onRemove} onToggle={onToggle} style={style}/>
        )
    }, [onRemove, onToggle, todos] )

    return (
        <List className='Todolist' width={510} height={513} rowCount={todos.length} rowHeight={57} List={todos} style={{ outline:'none' }} rowRenderer={rowRender} /> 
    );
};


export default React.memo(TodoList);