import { handleActions } from "redux-actions";
import * as api from '../lib/api';
import createRequestThunk from "../lib/createRequestThunk";

const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';

// thunk 함수를 생성
// thunk 함수의 내부에서는 시작할때, 성공할때, 실패할때에 따른 액션을 
// 발생하도록 구현한것.

export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

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