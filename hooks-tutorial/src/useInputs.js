//* custom Hook
import React, { useReducer } from 'react';

function reducer3(state, action){
    return {
      ...state,
      [action.name]: action.value,
    };
  
  }

export default function useInputs(initialForm){
    const [state, dispatch ] = useReducer( reducer3, initialForm ); 

    const onChangeinUseInputs = (e)=>{ 
        console.log(e.target.name +": " + e.target.value);
        dispatch(e.target)  //e.target: input전체
    }
    return [state, onChangeinUseInputs];

};