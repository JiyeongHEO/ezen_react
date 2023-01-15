// reduce함수: 
    // const arr=[1,2,3,4]
    // const init = 100;
    // //계속해서 고쳐나간다
    // const sum=arr.reduce(
    //     (prev,cur)=> prev+cur,
    //     init //여기에서 시작해서 누적
    // )
    // console.log(sum)


// import React, { useState } from 'react';

// const getAverage=(numbers)=>{
//     console.log('...계산중...'); //맨처음,적을때,버튼클릭시 모두
//     if(numbers.length == 0 ) return 0;
//     const sum = numbers.reduce((a,b) =>a+b);
//     return sum / numbers.length;
// }


// const Average = () => {
//     const [list, setList] =useState([1,2]);
//     const [number, setNumber] =useState('');

//     const onChange=(e)=>{
//         setNumber(e.target.value);
//     }
//     const onInsert=()=>{
//         const nextList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
        
//     }

//     return (
//         <div>
//             <input value={number} onChange={onChange} />
//             <button onClick = {onInsert}> 계산 </button>
//             <ul>
//                 { list.map( (value, idx) => (
//                      <li key={idx}> {value} </li>
//                     ) 
//                 ) }
//             </ul>
//             <div>
//                 <b>평균값:</b> {getAverage(list)}
//             </div>
            
//         </div>
//     );
// };

// export default Average;

// * useMemo 진행
// import React, { useMemo, useState } from 'react';

// const getAverage=(numbers)=>{
//     console.log('...계산중...'); 
//     if(numbers.length == 0 ) return 0;
//     const sum = numbers.reduce((a,b) =>a+b);
//     return sum / numbers.length;
// }


// const Average = () => {
//     const [list, setList] =useState([1,2]);
//     const [number, setNumber] =useState('');

//     const onChange=(e)=>{
//         setNumber(e.target.value);
//     }
//     const onInsert=()=>{
//         const nextList = list.concat(parseInt(number));
//         setList(nextList);
//         setNumber('');
//     }

//     const avg = useMemo(()=>getAverage(list), [list] ); //값이 바뀔때만 실행되게!!

//     return (
//         <div>
//             <input value={number} onChange={onChange} />
//             <button onClick = {onInsert}> 등록 </button>
//             <ul>
//                 { list.map( (value, idx) => (
//                      <li key={idx}> {value} </li>
//                     ) 
//                 ) }
//             </ul>
//             <div>
//                 <b>평균값:</b> {avg}
//             </div>
            
//         </div>
//     );
// };

// export default Average;


// * useCallback 진행
// import React, { useCallback, useMemo, useState } from 'react';

// const getAverage=(numbers)=>{
//     console.log('...계산중...'); 
//     if(numbers.length == 0 ) return 0;
//     const sum = numbers.reduce((a,b) =>a+b);
//     return sum / numbers.length;
// }


// const Average = () => {
//     const [list, setList] =useState([1,2]);
//     const [number, setNumber] =useState('');
    
//     const onChange= useCallback ( (e)=>{
//         setNumber(e.target.value);
//     }, [] ); //컴포넌트가 처음 렌더링될때만! 


//     const onInsert= useCallback(
//         ()=>{
//             const nextList = list.concat(parseInt(number));
//             setList(nextList);
//             setNumber('');
//         }, [number, list] 
//     ) //[number, list] 가 바뀌었을때만! 

//     const avg = useMemo(()=>getAverage(list), [list] );

//     return (
//         <div>
//             <input value={number} onChange={onChange} />
//             <button onClick = {onInsert}> 등록 </button>
//             <ul>
//                 { list.map( (value, idx) => (
//                      <li key={idx}> {value} </li>
//                     ) 
//                 ) }
//             </ul>
//             <div>
//                 <b>평균값:</b> {avg}
//             </div>
            
//         </div>
//     );
// };

// export default Average;



//* useRef 진행
import React, { useCallback, useMemo, useRef, useState } from 'react';

const getAverage=(numbers)=>{
    console.log('...계산중...'); 
    if(numbers.length == 0 ) return 0;
    const sum = numbers.reduce((a,b) =>a+b);
    return sum / numbers.length;
}

const Average = () => {
    const [list, setList] =useState([1,2]);
    const [number, setNumber] =useState('');
    const inputEl= useRef(null); //* 여기 */
    
    const onChange= useCallback ( (e)=>{
        setNumber(e.target.value);
    }, [] ); 


    const onInsert= useCallback(
        ()=>{
            const nextList = list.concat(parseInt(number));
            setList(nextList);
            setNumber('');
            inputEl.current.focus(); //* 여기 */
        }, [number, list] 
    ) 

    const avg = useMemo(()=>getAverage(list), [list] );

    return (
        <div>
            <input ref={inputEl} value={number} onChange={onChange} />
            <button onClick = {onInsert}> 등록 </button>
            <ul>
                { list.map( (value, idx) => (
                     <li key={idx}> {value} </li>
                    ) 
                ) }
            </ul>
            <div>
                <b>평균값:</b> {avg}
            </div>
            
        </div>
    );
};

export default Average;