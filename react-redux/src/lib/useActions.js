import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

/* 
 * 2023-02-26
4.[useActions] (https://react-redux.js.org/api/hooks#recipe-useactions) dispatch의 반복을 최적화, (param1-액션함수들, param2-배열이고 이 안의 요소 바뀌면 액션dispatch)
*/
export function useActions(actions, deps) { 
  const dispatch = useDispatch()
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map((a) => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(actions, dispatch)
    },
    deps ? [dispatch, ...deps] : [dispatch]
  )
}