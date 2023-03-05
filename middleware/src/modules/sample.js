

// import { handleActions } from 'redux-actions';
// import * as api from '../lib/api';
// import createRequestThunk from '../lib/createRequestThunk';  //[ReFactoring] 

/*
* 2023-02-26 시작
비동기시 1.[redux-thunk]
*/
// const GET_POST = 'sample/GET_POST'
// const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'
// const GET_POST_FAILURE= 'sample/GET_POST_FAILURE'

// const GET_USERS = 'sampel/GET_USERS'
// const GET_USERS_SUCCESS = 'sampel/GET_USERS_SUCCESS'
// const GET_USERS_FAILURE = 'sampel/GET_USERS_FAILURE'

//thunk 함수임. 시작+성공+실패 마다 액션 발생함
// export const getPost = id => async dispatch=>{
//     dispatch({type:GET_POST})
//     try{
//         const response = await api.getPost(id)
//         dispatch({
//             type:GET_POST_SUCCESS,
//             payload:response.data
//         })
//     }catch(e){
//         dispatch({
//             type:GET_POST_FAILURE,
//             payload:e,
//             error:true
//         })
//         throw e
//     }
// }

// export const getUsers = () => async dispatch=>{
//     dispatch({type:GET_USERS})
//     try{
//         const response = await api.getUsers()
//         dispatch({
//             type:GET_USERS_SUCCESS,
//             payload:response.data
//         })
//     }catch(e){
//         dispatch({
//             type:GET_USERS_FAILURE,
//             payload:e,
//             error:true
//         })
//         throw e
//     }
// }
// const initialState = {
//     loading:{
//         GET_POST: false,
//         GET_USERS: false
//     },
//     post: null,
//     users: null
// }

// const sample = handleActions(
//     {
//     [GET_POST] :state=>({ 
//         ...state, 
//         loading:{...state.loading,  GET_POST:true /*요청 시작 */  }
//     }) ,
//     [GET_POST_SUCCESS]: (state, action) => ({ 
//         ...state, 
//         loading:{...state.loading, GET_POST:false /*요청 그만*/ }, post: action.payload 
//     }),
//     [GET_POST_FAILURE]: (state, action) => ({ 
//         ...state, 
//         loading:{...state.loading, GET_POST:false /*요청 그만*/}
//     }),

//     [GET_USERS] :state=>({ ...state, loading:{...state.loading, GET_USERS:true }}),
//     [GET_USERS_SUCCESS]: (state, action) => ({ ...state, loading:{...state.loading, GET_USERS:false }, users: action.payload }),
//     [GET_USERS_FAILURE]: (state, action) => ({ ...state, loading:{...state.loading, GET_USERS:false }}),
//     },
//     initialState
// )

/**
*[ReFactoring] */
// const GET_POST = 'sample/GET_POST'
// const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'

// const GET_USERS = 'sampel/GET_USERS'
// const GET_USERS_SUCCESS = 'sampel/GET_USERS_SUCCESS'

// export const getPost = createRequestThunk(GET_POST, api.getPost)
// export const getUsers = createRequestThunk(GET_USERS, api.getUsers)

// const initialState = {
//     post: null,
//     users: null
// }

// const sample = handleActions(
//     {
//     [GET_POST_SUCCESS]: (state, action) => ({ ...state, post: action.payload }),
//     [GET_USERS_SUCCESS]: (state, action) => ({ ...state, users: action.payload })
//     },
//     initialState
// )

// export default sample


/*
*2023-03-05
[saga]
*/
// import { createAction, handleActions } from 'redux-actions';
// import * as api from '../lib/api';
// import {call, put, takeLatest } from 'redux-saga/effects'; //[saga]call:pomise반환함수 호출하고 기다림. param1은 함수, param2는 param1에 넣을 인수, id를 알아서 1번부터조회
// import { finishLoading, startLoading } from './loading';


// const GET_POST = 'sample/GET_POST';
// const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
// const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

// const GET_USERS = 'sample/GET_USERS';
// const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
// const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// export const getPost = createAction(GET_POST, id => id);
// export const getUsers = createAction(GET_USERS);

// function* getPostSaga(action){   //[saga] generator() yield
//     yield put(startLoading(GET_POST));   
//     //action받아와서 action정보보기
//     try{
//         const post = yield call(api.getPost, action.payload); //[saga] 
//         yield put({
//             type:GET_POST_SUCCESS,
//             payload:post.data
//         });
//     }catch(e){
//         yield put({
//             type:GET_POST_FAILURE,
//             payload:e,
//             error:true
//         });
//     }
//     yield put(finishLoading(GET_POST)); //[saga]
// }

// function* getUsersSaga(){
//     yield put(startLoading(GET_USERS));
//     try{
//         const user = yield call(api.getUsers);
//         yield put({
//             type:GET_USERS_SUCCESS, payload:user.data
//         });
//     }catch(e){
//         yield put({
//             type:GET_USERS_FAILURE, payload:e, error:true
//         })
//     }
//     yield put(finishLoading(GET_USERS));
// }


// export function* sampleSaga(){
//     yield takeLatest(GET_POST, getPostSaga); //[saga]
//     yield takeLatest(GET_USERS, getUsersSaga);
// }

// const initialState ={ post:null, users:null }
// const sample = handleActions(
//     {
//     [GET_POST_SUCCESS] : (state, action) =>({
//         ...state, post:action.payload
//     }),
//     [GET_USERS_SUCCESS] : (state, action) =>({
//         ...state, users:action.payload
//     }),
// },
//     initialState
// );

// export default sample


/* [saga-refactoring] */
import { createAction, handleActions } from 'redux-actions';
import * as api from '../lib/api';
import { takeLatest } from 'redux-saga/effects';
import createRequestSaga from '../lib/createRequestSaga';


const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';


export const getPost = createAction(GET_POST, id => id);
export const getUsers = createAction(GET_USERS);

const getPostSaga = createRequestSaga(GET_POST, api.getPost);
const getUsersSaga = createRequestSaga(GET_USERS, api.getUsers);


export function* sampleSaga(){
    yield takeLatest(GET_POST, getPostSaga);
    yield takeLatest(GET_USERS, getUsersSaga);
}

const initialState ={
    post:null,
    users:null
}
const sample = handleActions(
    {
    [GET_POST_SUCCESS] : (state, action) =>({
        ...state,
        post:action.payload
    }),
    [GET_USERS_SUCCESS] : (state, action) =>({
        ...state,
        users:action.payload
    }),
},
    initialState
);

export default sample