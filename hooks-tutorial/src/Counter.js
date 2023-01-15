// 2023-01-08 시작
// import React, { useState } from 'react';

// const Counter = () => {
//     const [value, setValue] = useState(0);
//     return (
//         <div>
//             <p>현재 카운터값은 <b>{value}</b> </p>
//             <button onClick={ () => setValue(value+1) }> +1 </button> 
//             <button onClick={ () => setValue(value-1) }> -1 </button> 
//         </div>
//     );
// };

// export default Counter;


/* 2023-01-15 useReducer 진행: dispatch */
import React, { useReducer, useState } from 'react';

function reducer1(state, action){
    switch(action.type){
        case 'INCREMENT':
            return{ value: state.value +1 } 
        case 'DECREMENT':
            return{ value: state.value -1 }
        default:
            return state;
    }
}

const Counter = () => {
    const [state, dispatch ] = useReducer( reducer1, {value:0} ); //두번째arg: reducer의 기본값
    //dispatch: useState보다 복잡한 처리 action, reducer1의 action method임

    return (
        <div>
            <p>현재 카운터값은 <b>{state.value}</b> </p>
            <button onClick={ () => dispatch ( {type: "INCREMENT" } ) }> +1 </button> 
            <button onClick={ () => dispatch ( {type: "DECREMENT" } ) }> -1 </button> 
        </div>
    );
};

export default Counter;

