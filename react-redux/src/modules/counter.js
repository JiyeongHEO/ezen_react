import {createAction, handleActions} from 'redux-actions' //[액션생성 함수수정 redux-actions]
/* 2023-02-19 */

//action타입 정의
const INCREASE = 'counter/INCREASE' 
const DECREASE = 'counter/DECREASE'

//action 생성함수①
// export const increase = ()=> ( {type:INCREASE} ) //다른파일에서 부를때 import counter, {increase, decrease} 가능
// export const decrease = ()=> ( {type:DECREASE} )

//action 생성함수② [액션생성 함수수정 redux-actions]
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)


//초기상태정의
const initialState = { number: 0 }

//reducer①
// function counter(state = initialState, action){
    console.log("counter 모듈 1")
//     switch(action.type){
//         case INCREASE: return{
//             number: state.number +1
//         }
//         case DECREASE: return{
//             number: state.number - 1
//         }
//         default:
//             return state;
//     }
// }

//reducer② [액션생성 함수수정 redux-actions]
const counter = handleActions(
    {
        [INCREASE]:(state, action) =>({ number: state.number +1 }),
        [DECREASE]:(state, action) =>({ number: state.number -1 })
    },
    initialState
)

export default counter; 
