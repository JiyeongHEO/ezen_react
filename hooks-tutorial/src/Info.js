import React, {useReducer, useEffect, useState} from 'react';
import useInputs from './useInputs';

/*2023-01-08 시작 */ 
// const Info = () => {
//   const [ name, setname ] = useState('');
//   const [ nickName, setnickName ] = useState('');

//   const onChangeName = (e)=>{ setname(e.target.value) } //비효율적인 부분
//   const onChangenickName = (e)=>{  setnickName(e.target.value); } //비효율적인 부분

//   return (
//   <div>
//     <div>
//       <input value={name} onChange={ onChangeName } placeholder='이름'></input> 
//       <br/>
//       <input value={nickName} onChange={ onChangenickName } placeholder='닉네임'></input> 
//     </div>
//     <div>
//       <div> <b>이름: {name}</b> </div>
//       <div> <b>닉: {nickName}</b> </div>
    
//     </div>
//   </div>
//   );
// };

/* 2023-01-15 시작 */
// const Info = () => {
//     const [ name, setname ] = useState('');
//     const [ nickName, setnickName ] = useState('');

//     const onChangeName = (e)=>{ setname(e.target.value) } //비효율적인 부분
//     const onChangenickName = (e)=>{  setnickName(e.target.value); } //비효율적인 부분

//     // useEffect(()=>{
//     //   //console.log("...렌더링완료..."); console.log({name, nickName});
//     //   console.log("...마운트시만실행...");
//     // },[]);  //2번째 param에 []: mount시(맨처음 rendering)만 useEffect함

//     // useEffect(()=>{
//     //   console.log("...렌더링완료...");  //무조건나옴
//     //   console.log(name); //name값이 update될때만 실행한다. 
//     // },[ name ]); 

//     useEffect(()=>{
//       console.log("...렌더링완료...");
//       console.log(name); 

//       return ()=>{ console.log("... cleanUp ..."); 
//                   console.log(name); } //cleanUp. unmount전,update전
//     },[name]);


//     return (
//     <div>
//       <div>
//         <input value={name} onChange={ onChangeName } placeholder='이름'></input> 
//         <br/>
//         <input value={nickName} onChange={ onChangenickName } placeholder='닉네임'></input> 
//       </div>
//       <div>
//         <div> <b>이름: {name}</b> </div>
//         <div> <b>닉: {nickName}</b> </div>
//       </div>
//     </div>
//     );
// };

// export default Info;


//useReducer진행
// function reducer2(state, action){
//   return {
//     ...state,
//     [action.name]: action.value,
//   };

// }

// const Info = () => {
//   const [state, dispatch ] = useReducer( reducer2, { name:'', nickName:''} ); 
//   const { name, nickName } = state

//   const onChange = (e)=>{ 
//     console.log(e.target.name +": " + e.target.value);
//     dispatch(e.target)  //e.target: input전체
//   }

//   return (
//   <div>
//     <div>
//       <input name="name" value={name} onChange={ onChange } placeholder='이름'></input> 
//       <br/>
//       <input name="nickName" value={nickName} onChange={ onChange } placeholder='닉네임'></input> 
//     </div>
//     <div>
//       <div> <b>이름: {name}</b> </div>
//       <div> <b>닉: {nickName}</b> </div>
//     </div>
//   </div>
//   );
// };

// export default Info;



//* custom Hook
const Info = () => {

  const [state, onChangeinUseInputs ] = useInputs( { name:'초기값ㅎ', nickName:''} ); /* 여기 */
  const { name, nickName } = state
  return (
  <div>
    <div>
      <input name="name" value={name} onChange={ onChangeinUseInputs } placeholder='이름'></input> 
      <br/>
      <input name="nickName" value={nickName} onChange={ onChangeinUseInputs } placeholder='닉네임'></input> 
    </div>
    <div>
      <div> <b>이름: {name}</b> </div>
      <div> <b>닉: {nickName}</b> </div>
    </div>
  </div>
  );
};

export default Info;