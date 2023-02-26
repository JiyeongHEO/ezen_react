
/*
* 2023-02-26 시작
[ReFactoring]
*/

import { finishLoading, startLoading } from "../modules/loading"; //[ReFactoring]

export default function createReactThunk(type, request){
    //moduels의 액션
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;

    return params => async dispatch=>{
        dispatch({type})
        dispatch(startLoading(type)) //[ReFactoring]
        try{
            const response = await request(params)
            dispatch({
                type: SUCCESS,
                payload:response.data
            })
            dispatch(finishLoading(type))
        }catch(e){
            dispatch({
                type: FAILURE,
                payload:e,
                error:true
            })
            dispatch(finishLoading(type)) //[ReFactoring]
            //throw e //[ReFactoring]
        }
    }
}