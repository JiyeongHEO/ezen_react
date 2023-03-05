import { call, put } from "redux-saga/effects";
import { finishLoading, startLoading } from "../modules/loading";

/** 2023-03-05
 * [saga-refactoring] */

export default function createRequestSaga(type, request) {

const SUCCESS = `${type}_SUCCESS`;
const FAILURE = `${type}_FAILURE`;

  return function* (action){  //generator()
    try{
        yield put(startLoading(type));  
            const response = yield call(request, action.payload);   
            yield put({
                type:SUCCESS,
                payload:response.data
            });
    }catch(e){
        yield put({
            type:FAILURE,
            payload:e,
            error:true
        });
    }
    yield put(finishLoading(type)); 
}
  }