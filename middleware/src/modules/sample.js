

import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';  //[ReFactoring] 

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
//     [GET_POST] :state=>({ ...state, loading:{...state.loading,  GET_POST:true /*요청 시작 */  }}) ,
//     [GET_POST_SUCCESS]: (state, action) => ({ ...state, loading:{...state.loading, GET_POST:false /*요청 그만*/ }, post: action.payload }),
//     [GET_POST_FAILURE]: (state, action) => ({ ...state, loading:{...state.loading, GET_POST:false /*요청 그만*/}}),

//     [GET_USERS] :state=>({ ...state, loading:{...state.loading, GET_USERS:true }}),
//     [GET_USERS_SUCCESS]: (state, action) => ({ ...state, loading:{...state.loading, GET_USERS:false }, users: action.payload }),
//     [GET_USERS_FAILURE]: (state, action) => ({ ...state, loading:{...state.loading, GET_USERS:false }}),
//     },
//     initialState
// )

/**
*[ReFactoring] */
const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS'

const GET_USERS = 'sampel/GET_USERS'
const GET_USERS_SUCCESS = 'sampel/GET_USERS_SUCCESS'

export const getPost = createRequestThunk(GET_POST, api.getPost)
export const getUsers = createRequestThunk(GET_USERS, api.getUsers)

const initialState = {
    post: null,
    users: null
}

const sample = handleActions(
    {
    [GET_POST_SUCCESS]: (state, action) => ({ ...state, post: action.payload }),
    [GET_USERS_SUCCESS]: (state, action) => ({ ...state, users: action.payload })
    },
    initialState
)

export default sample
