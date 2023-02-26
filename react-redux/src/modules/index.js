import counter from "./counter"
import todos from "./todos"
import {combineReducers} from 'redux';

/* 2023-02-19 */
const rootReducer = combineReducers({
    counter, todos
})

export default rootReducer