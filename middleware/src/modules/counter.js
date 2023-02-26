import { createAction, handleActions } from 'redux-actions';

/* 
*2023-02-26 시작 (yarn create react-app middleware )
* redux-미들웨어

*/
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

//여기 비동기시 1.[redux-thunk] 
export const  increaseAsync = ()=> dispatch=>{
    setTimeout(()=>{ dispatch( increase() ) }, 1000)
}
export const  decreaseAsync = ()=> dispatch=>{
    setTimeout(()=>{ dispatch( decrease() ) }, 1000)
} //

const initialState = 0; 

const counter = handleActions(
    {
    [INCREASE]:state => state+1,
    [DECREASE]:state => state-1
    },
initialState
)

export default counter