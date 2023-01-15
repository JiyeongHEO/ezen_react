import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
  } from 'react-icons/md';
  import cn from 'classnames';
  import './TodoListItem.scss';


const TodoListItem = () => {
    
    return (
        <div className='TodoListItem'>
            <div className='checkBox'>
                <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
                <div className='text'> 할 일 </div>
            </div>

            <div className='remove'>
                <MdRemoveCircleOutline></MdRemoveCircleOutline>
            </div>
        </div>
    );
};

export default TodoListItem;