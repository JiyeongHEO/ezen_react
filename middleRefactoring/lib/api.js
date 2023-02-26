import axios from "axios"
// https://jsonplaceholder.typicode.com/posts/1
// https://jsonplaceholder.typicode.com/users

// id 읽어서
export const getPost = id => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)

// user를 받아와라
export const getUsers = id => axios.get(`https://jsonplaceholder.typicode.com/users`)