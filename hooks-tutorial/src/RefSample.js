import React, { useReducer, useRef } from 'react';

const RefSampel = () => {

    const id = useRef(1);  //local변수로 사용때. to-do때 할 예정
    const setid = (n)=>{ id.current = n }
    const printId = ()=>{ console.log( id.current ) }

    return (
        <div>
            Ref        
        </div>
    );
};

export default RefSampel;