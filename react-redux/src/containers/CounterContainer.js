import React, { useCallback } from 'react';
import Counter from '../components/Counter';
import { connect, useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../modules/counter';  //[module로 삽입]
import { bindActionCreators } from 'redux'; //[connect에서 중복제거]

/* 2023-02-19 
[connect함수(redux기본제공 유틸)],[Container컴포] 
*/

// const CounterContainer = ({number, increase, decrease}) => {
//     return (
//       <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
//     );
// };

// const mapStateToProps = state => ({   //현재 store의 state
//     number: state.counter.number
// })
// const mapDispatchToProps = dispatch => ({
//     increase: ()=>{ console.log('mapDispatchToProps - Increase') },
//     decrease: ()=>{ console.log('mapDispatchToProps - Decrease') }
// })

// export default connect(  //(mapStateToProps, mapDispatchToProps)(target 콤포넌트)
//     mapStateToProps, mapDispatchToProps
// )(CounterContainer);


/* 2023-02-19 
[module로 삽입]
*/
// const CounterContainer = ({number, increase, decrease}) => {
//     return (
//       <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
//     );
// };

// const mapStateToProps = state => ({   
//     number: state.counter.number
// })
// 
// const mapDispatchToProps = dispatch => ({  //여기
//     increase: ()=>{ dispatch(increase()) },
//     decrease: ()=>{  dispatch(decrease()) }
// })

// export default connect( 
//     mapStateToProps, mapDispatchToProps
// )(CounterContainer);

/* 2023-02-19 
[connect에서 중복제거]
*/
// const CounterContainer = ({number, increase, decrease}) => {
//     console.log("counter 콘테이너2")

//     return (
//       <Counter number={number} onIncrease={increase} onDecrease={decrease}/>
//     );
// };

// export default connect(  //여기
//     state=>({
//         number: state.counter.number
//     }), 
//     dispatch=>bindActionCreators({ increase, decrease }, dispatch )
// )(CounterContainer);

// export default connect(  //여기 더 줄임 
//     state=>({
//         number: state.counter.number
//     }), 
//    { increase, decrease }, 
// )(CounterContainer);

/*
 * 2023-02-26
1.[useSelector] connect대신 상태조회, const 결과 = useSelector(상태선택 함수)
2.[useDispatch] 로 액션 발생시킴, const dispatch = useDispatch(); dispatch({type:'액션이름'})
-> 문제) increase(),decrease()가 계속 재렌더링됨 -> [useCallback] onIncrease, onDecrease로 변경

*/
const CounterContainer = () => {
    console.log("counter 콘테이너2")
    const number = useSelector(state => state.counter.number); //1.여기
    const dispatch = useDispatch(); //2.여기
    const onIncrease = useCallback(()=>dispatch(increase()), [dispatch])
    const onDecrease = useCallback(()=>dispatch(decrease()), [dispatch])

    return (
    //   <Counter number={number} onIncrease={()=>dispatch(increase())} onDecrease={()=>dispatch(decrease())}/>
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease}/>
    );
};

export default CounterContainer
