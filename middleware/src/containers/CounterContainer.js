import { connect } from 'react-redux'
import Counter from '../components/Counter'
// import { increase, decrease } from '../modules/counter'
import { increaseAsync, decreaseAsync } from '../modules/counter' //여기 비동기시 1.[redux-thunk] 

/* 
*2023-02-26 시작 
* redux-미들웨어: [connect]사용
*/
// const CounterContainer = ({number, increase, decrease}) => {
//   return (
//    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   )
// }

// export default connect(
//     state => ({
//         number:state.counter
//     }),
//     {
//         increase,
//         decrease
//     }
// )(CounterContainer);

//여기 비동기시 1.[redux-thunk] 
const CounterContainer = ({number, increaseAsync, decreaseAsync}) => {
    return (
     <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />
    )
  }
  
  export default connect(
      state => ({
          number:state.counter
      }),
      {
        increaseAsync,
        decreaseAsync
      }
  )(CounterContainer);