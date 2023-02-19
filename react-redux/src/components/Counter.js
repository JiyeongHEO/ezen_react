import React from 'react';

/* 2023-02-19 */
const Counter = ({number, onIncrease, onDecrease}) => {
    console.log("counter 콤포넌트3")
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}> +1 </button>
                <button onClick={onDecrease}> -1 </button>
            </div>
        </div>
    );
};

export default Counter;