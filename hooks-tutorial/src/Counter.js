import React, { useState } from 'react';

/*
2023-01-08 시작
   * [ hook1 ] 함수형
+) info.js와 비교:  useState 자주 사용 성능 저하됨(e.target.value 요부분이 비효율적)

 
 */
const Counter = () => {
    const [value, setValue] = useState(0);
    return (
        <div>
            <p>현재 카운터값은 <b>{value}</b> </p>
            <button onClick={ () => setValue(value+1) }> +1 </button> 
            <button onClick={ () => setValue(value-1) }> -1 </button> 
        </div>
    );
};

export default Counter;