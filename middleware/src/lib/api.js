//https://jsonplaceholder.typicode.com/
import axios from "axios"

/*
*2023-02-26 
비동기시 1.[redux-thunk]
*/

export const getPost = id => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
export const getUsers = id => axios.get(`https://jsonplaceholder.typicode.com/users`)



