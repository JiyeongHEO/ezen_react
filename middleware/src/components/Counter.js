import React from 'react'

/* 
*2023-02-26 시작 
* redux-미들웨어 
*/
const Counter = ({onIncrease, onDecrease, number}) => {
  return (
    <div>
        <h1>{number}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
    </div>
  )
}

export default Counter