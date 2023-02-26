import { createAction, handleActions } from "redux-actions";

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
    START_LOADING,
    requestType => requestType  // payload:'sample/GET_POST'
);

export const finishLoading = createAction(
    FINISH_LOADING,
    requestType => requestType 
);

const initialState = {};
// [GET_POST_SUCCESS] : (state, action) =>({
//     ...state,
//     loading:{
//         ...state.loading,
//         GET_POST:false // 요청 완료
//     },
//     post:action.payload
// }),
const loading = handleActions(
    {
        [START_LOADING]: (state, action) =>({
            ...state,
            [action.payload]:true
        }),
        [FINISH_LOADING]: (state,action) =>({
            ...state,
            [action.payload]:false
        })
    },
    initialState
)

export default loading