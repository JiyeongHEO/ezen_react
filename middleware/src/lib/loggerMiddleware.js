// 함수로하면 이럼 const loggerMiddleware = function loggerMiddleware(store){
//     return function(next){
//       return function(action){
//         //미들웨어 기본 구조 
//       };
//     };
//   };

const loggerMiddleware  = store => next => action => {     //미들웨어 기본구조    
    //next: store의 dispatch와 비슷함. 차이는 next(action)으로 부르면 미들웨어~reducer까지 액션 넘겨줌, 중간에서 액션제어 가능
    //1.이전상태 2.액션정보 3.업데이트된 상태

    console.group(action && action.type)   //action이 맞으면 log를 그룹화함
    console.log('이전상태', store.getState())
    console.log('액션', action)  //비동기시 1.[redux-thunk] 중간에서 실행됨

    next(action) //미들웨어 -> reducer까지 액션 넘겨줌

    console.log('다음상태',store.getState() )  //업데이트된 상태
    console.groupEnd()
}

export default loggerMiddleware

