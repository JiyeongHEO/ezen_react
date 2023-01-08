import React, {useState} from 'react';

const Info = () => {
    const [ name, setname ] = useState('');
    const [ nickName, setnickName ] = useState('');

    const onChangeName = (e)=>{ setname(e.target.value) }
    const onChangenickName = (e)=>{  setnickName(e.target.value); }


    return (
    <div>
      <div>
        <input value={name} onChange={ onChangeName } placeholder='이름'></input> 
        <br/>
        <input value={nickName} onChange={ onChangenickName } placeholder='닉네임'></input> 
      </div>
      <div>
        <div> <b>이름: {name}</b> </div>
        <div> <b>닉: {nickName}</b> </div>
      
      </div>
    </div>
    );
};

export default Info;