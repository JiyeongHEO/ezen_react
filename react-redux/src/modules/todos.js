import { createAction, handleActions } from "redux-actions"
import produce from 'immer'; //[immer활용 - produce, draft] 

//action타입 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'
const INSERT = 'todos/INSERT'
const TOGGLE = 'todos/TOGGLE'  
const REMOVE = 'todos/REMOVE' 


/* 2023-02-19 */

//action 생성함수①
// export const changeInput = input => ( {type:CHANGE_INPUT, input} )
// let id = 3;
// export const insert = text=> ( {type:INSERT, todo:{ id:id++, text, done:false }} )
// export const toggle = id => ( {type:TOGGLE, id} )
// export const remove = id => ( {type:REMOVE, id} )

//action 생성함수② [액션생성 함수수정 redux-actions]
export const changeInput = createAction(CHANGE_INPUT, input=> input)
let id = 3;
export const insert = createAction(INSERT, text=> ({ id:id++, text, done:false }))
export const toggle = createAction(TOGGLE, id=> id )
export const remove = createAction(REMOVE, id=> id )

//초기상태정의
const initialState = {
    input: '',
    todos:[
        { id:1, text:'redux기초1', done:true },
        { id:2, text:'redux기초2', done:false }
    ]
}

//reducer①
// function todos(state = initialState, action){
//     console.log("모듈 1 Todos")
//     switch(action.type){
//         case CHANGE_INPUT: return{
//            ...state, input: action.input
//         }
//         case INSERT: return{
//             ...state, todos: state.todos.concat( action.todo )
//         }
//         case TOGGLE: return{
//             ...state, todos: state.todos.map( t => t.id===action.id? {...t, done:!t.done} : t )
//         }
//         case REMOVE: return{
//           ...state, todos: state.todos.filter( t => t.id !== action.id )
//         }
//         default:
//             return state;
//     }
// }

//reducer② [액션생성 함수수정 redux-actions]
// const todos = handleActions({
//     //가동성 위해 action, action.payload 에서 수정 (REMOVE는 수정전)
//     [CHANGE_INPUT]: ( state, {payload: input} )=>({ ...state, input }), 
//     [INSERT]:( state, {payload: todo} )=>({ 
//         ...state, todos: state.todos.concat( todo)
//     }),
//     [TOGGLE]: ( state, {payload: id} )=>({
//         ...state, todos: state.todos.map( t => t.id === id? {...t, done:!t.done} : t )
//     }),
   
//     [REMOVE]:(state, action)=>({
//         ...state, todos: state.todos.filter( t => t.id !== action.payload )
//     })

// }, initialState)

//reducer③ [immer활용 - produce, draft] 
const todos = handleActions({
    [CHANGE_INPUT]: ( state, {payload: input} )=> produce(state, draft => { draft.input = input }),

    [INSERT]: ( state, {payload: todo} )=> produce(state, draft => { draft.todos.push(todo) }),

    [TOGGLE]: ( state, {payload: id} )=>  produce(state, draft => {
        const todo = draft.todos.find( t => t.id === id)
        todo.done = !todo.done
    }),
   
    [REMOVE]:(state, action)=>({
        ...state, todos: state.todos.filter( t => t.id !== action.payload )
    })

}, initialState)


export default todos; 
