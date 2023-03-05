
import { createAction, handleActions } from "redux-actions"

/**
 * [ReFactoring] 
 * 
 * */
const START_LOADING = 'loading/START_LOADING'
const FINISH_LOADING = 'loading/FINISH_LOADING'

export const startLoading = createAction(
    START_LOADING, 
    requestType => requestType  //payload:'sample/GET_어쩌고'와 같음
)

export const finishLoading = createAction(
    FINISH_LOADING, requestType => requestType
)

const initialState = {};
// const loading = handleAction(
//     {
//         [START_LOADING]: (state, action)=>( { ...state, [action.payload]:true } ),
//         [FINISH_LOADING]: (state, action)=>( { ...state, [action.payload]:false } ) 
//     },
//     initialState
// )

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
