// import { createAction, handleActions } from 'redux-actions';

// /* 
// *2023-02-26 시작 (yarn create react-app middleware )
// * redux-미들웨어

// */
// const INCREASE = 'counter/INCREASE';
// const DECREASE = 'counter/DECREASE';

// export const increase = createAction(INCREASE);
// export const decrease = createAction(DECREASE);

// //여기 비동기시 1.[redux-thunk] 
// export const  increaseAsync = ()=> dispatch=>{
//     setTimeout(()=>{ dispatch( increase() ) }, 1000)
// }
// export const  decreaseAsync = ()=> dispatch=>{
//     setTimeout(()=>{ dispatch( decrease() ) }, 1000)
// } //

// const initialState = 0; 

// const counter = handleActions(
//     {
//     [INCREASE]:state => state+1,
//     [DECREASE]:state => state-1
//     },
// initialState
// )

// export default counter

/*
http://open.kakao.com/o/g5npTdSe
*2023-03-05 [saga]

*/
import { createAction, handleActions } from 'redux-actions';
import { delay, put, select, takeEvery, takeLatest} from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
// 액션타입 선언 
const INCREASE_ASYNC = 'counter/INCREAMENT_ASYNC';  
const DECREASE_ASYNC = 'counter/DECREAMENT_ASYNC';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 액션생성함수 
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);  
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga(){
  yield delay(1000);  // 1초를 기다린다 [saga]
  yield put(increase());// 특정 액션을 디스패치한다 [saga]

  const number = yield select(state => state.counter); //[saga-refactoring]select: "saga내부"에서 현재state를 참조할때. 이 state는 "store상태"
  console.log(`현재 값은 ${number} 입니다.`)
}

function* decreaseSaga(){
  yield delay(1000)  
  yield put(decrease()); 
}

export function* counterSaga(){
  yield takeEvery(INCREASE_ASYNC, increaseSaga); //[saga]
  yield takeLatest(DECREASE_ASYNC, decreaseSaga); //[saga] 진행중이면 취소처리하고 가장 마지막실행된 작업만 수행
}

const initialState = 0; // 상태는 꼭 객체일 필요가 없다. 숫자도 작동함.

const counter = handleActions(
    {
      [INCREASE]: state => state + 1,
      [DECREASE]: state => state - 1
    },
    initialState
  );
  
  export default counter;