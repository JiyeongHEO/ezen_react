import React from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import {changeInput, insert, toggle, remove} from '../modules/todos';

/* 2023-02-19 
*/

const TodosContainer = ({ input,todos,   changeInput,insert,toggle,remove }) => {
    console.log("콘테이너2 Todos")

    return (
      <Todos input={input} todos={todos} onChangeInput={changeInput} onInsert={insert} onToggle={toggle} onRemove={remove} />
    );
}

export default connect(  
    ({ todos })=>({
        input: todos.input,
        todos: todos.todos
    }),
   { changeInput, insert, toggle, remove  }
)(TodosContainer);

