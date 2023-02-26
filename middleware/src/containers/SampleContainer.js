import React from 'react';
import { connect } from 'react-redux'
import { getPost, getUsers } from '../modules/sample' //여기 비동기시 1.[redux-thunk] 
import Sample from '../components/Sample';
import loading from '../modules/loading';


/* 
*2023-02-26 시작 
비동기시 1.[redux-thunk]
*/
const {useEffect} = React //ComponentDidMount시...즉 이 코드가 시작시 바로실행
// const SampleContainer = ({getPost, loadingPost, post,   getUsers, loadingUsers, users }) => {
    
    
//     useEffect(()=>{ getPost(1); getUsers(1); }, [getPost, getUsers])
    
//     return (
//      <Sample post={post} loadingPost={loadingPost} users={users} loadingUsers={loadingUsers}/>
//     )
//   }
  
  // export default connect(
  //     ({sample}) => ({
  //        post: sample.post,
  //        users: sample.users,
  //        loadingPost: sample.loading.GET_POST,
  //        loadingUsers:  sample.loading.GET_USERS
  //     }),
  //     {
  //       getPost, getUsers //update가 필요한 부분
  //     } 
  // )(SampleContainer);



  /*[ReFactoring] loadding, async,  */
  const SampleContainer = ({getPost, loadingPost, post,   getUsers, loadingUsers, users }) => {
  
    useEffect(()=> {
      const fn = async()=>{  //여기
        try{
          await getPost(1);
          await  getUsers(1);
        }catch(e){ console.log(e) }
      }
      fn()
    },
    [getPost, getUsers] //여기끝
    )
    return (
     <Sample post={post} loadingPost={loadingPost} users={users} loadingUsers={loadingUsers}/>
    )
  }
  
  export default connect(
    ({sample, loading}) => ({ //여기
       post: sample.post,
       users: sample.users,
       loadingPost: loading['sample/GET_POST'],  //여기
       loadingUsers: loading['sample/GET_USERS']  //여기 
    }),
    {
      getPost, getUsers 
    } 
)(SampleContainer);



