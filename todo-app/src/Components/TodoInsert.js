import React, { useCallback, useState } from 'react';
import {MdAdd} from 'react-icons/md'
import './TodoInsert.scss'

// const TodoInsert = () => {

//     return (
//         <form className="TodoInsert">
//             <input placeholder='더 할 일..'></input>
//             <button type="submit"> <MdAdd/> </button>

//         </form>
//     );
// };


/*2023-01-29  */
const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    const onChange = useCallback((e)=>{
        setValue(e.target.value);
    },[])

    const onSubmit = useCallback(
        (e) =>{
            onInsert(value);
            setValue('');
            e.preventDefault();  //submit(+onClick과달리 enter키 먹음)의 기본기능인 새로고침 피함
        }
        ,[value, onInsert]
    )


    return (
        <form className="TodoInsert" onSubmit={onSubmit} >  
            <input placeholder='더 할 일..' value={value} onChange={onChange}/>
            <button type="submit"> <MdAdd/> </button>
        </form>
    );
};

export default TodoInsert;