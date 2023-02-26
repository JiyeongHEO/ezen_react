import { combineReducers } from "redux";
import counter from './counter';  
import sample from './sample';    //1.[redux-thunk] 
import loading from './loading'; //[ReFactoring]:

/* 
*2023-02-26 시작 (yarn create react-app middleware )
* redux-미들웨어: Reducer,combineReducers,제일먼저 실행

비동기시 1.[redux-thunk]
[ReFactoring]
*/
const rootReducer = combineReducers({
    counter, sample, loading
});

export default rootReducer;
