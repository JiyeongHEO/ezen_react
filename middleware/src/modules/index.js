// import { combineReducers } from "redux";
// import counter from './counter';  
// import sample from './sample';    //1.[redux-thunk] 
// import loading from './loading'; //[ReFactoring]:

// /* 
// *2023-02-26 시작 (yarn create react-app middleware )
// * redux-미들웨어: Reducer,combineReducers,제일먼저 실행

// 비동기시 1.[redux-thunk]
// [ReFactoring]
// */
// const rootReducer = combineReducers({
//     counter, sample, loading
// });

// export default rootReducer;


/*
*2023-03-05
[saga]
*/
import { combineReducers } from "redux";
import counter, { counterSaga } from './counter'; //[saga]
import sample,  { sampleSaga }from './sample';
import loading from "./loading";
import { all } from "redux-saga/effects"; //[saga] 여러개saga 합침

const rootReducer = combineReducers({
    counter,
    sample,
    loading
});

export function* rootSaga(){ //[saga]
    yield all([counterSaga(), sampleSaga()]); //[saga] 
}

export default rootReducer;