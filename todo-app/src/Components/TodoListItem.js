import React from 'react';
import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
  } from 'react-icons/md';
  import cn from 'classnames'; //class이름이 조건식에 부합하면...
  import './TodoListItem.scss';


// const TodoListItem = () => {
    
//     return (
//         <div className='TodoListItem'>
//             <div className='checkBox'>
//                 <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank>
//                 <div className='text'> 할 일 </div>
//             </div>

//             <div className='remove'>
//                 <MdRemoveCircleOutline></MdRemoveCircleOutline>
//             </div>
//         </div>
//     );
// };

/* 23-01-29 
remove: onRemove(id)
*/

// const TodoListItem = ({todo, onRemove, onToggle}) => {
//     const {id, text,checked } = todo;

//     return (
//         <div className='TodoListItem'>

//             <div className={cn( 'checkbox',{checked} )} onClick={()=>onToggle(id)}>
//                 {checked? <MdCheckBox/> :<MdCheckBoxOutlineBlank/>}
//                 <div className='text'> {text} </div>
//             </div>

//             <div className='remove'  onClick={()=> onRemove(id)}>
//                 <MdRemoveCircleOutline></MdRemoveCircleOutline>
//             </div>
//         </div>
//     );
// };


/** 최적화  */
// const TodoListItem = ({todo, onRemove, onToggle}) => {
//     const {id, text,checked } = todo;

//     return (
//         <div className='TodoListItem'>

//             <div className={cn( 'checkbox',{checked} )} onClick={()=>onToggle(id)}>
//                 {checked? <MdCheckBox/> :<MdCheckBoxOutlineBlank/>}
//                 <div className='text'> {text} </div>
//             </div>

//             <div className='remove'  onClick={()=> onRemove(id)}>
//                 <MdRemoveCircleOutline></MdRemoveCircleOutline>
//             </div>
//         </div>
//     );
// };

// export default  React.memo(TodoListItem);  /* 여기 */

/** 최적화2 - 실행3 
 * react-virtualized : style추가  */
const TodoListItem = ({todo, onRemove, onToggle, style}) => {
    const {id, text,checked } = todo;

    return (

        <div className='TodoListItem-virtualised' style={style}>
        <div className='TodoListItem'>

            <div className={cn( 'checkbox',{checked} )} onClick={()=>onToggle(id)}>
                {checked? <MdCheckBox/> :<MdCheckBoxOutlineBlank/>}
                <div className='text'> {text} </div>
            </div>

            <div className='remove'  onClick={()=> onRemove(id)}>
                <MdRemoveCircleOutline></MdRemoveCircleOutline>
            </div>
        </div>
        </div>
    );
};

export default  React.memo(TodoListItem);  /* 여기 */