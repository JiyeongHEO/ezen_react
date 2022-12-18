import React, {useState} from 'react';

const Say = () => {
    
    const [message, setMessage] = useState('....'); // //원소1, 원소2:함수
    const onClickEnter = ()=> setMessage('im in ~');
    const onClickLeave = ()=> setMessage('im out ~');

    const [colour, setColour] = useState('black');

    return (
        <div>
            <button onClick={ onClickEnter }> 입장 </button>
            <button onClick={ onClickLeave }> 퇴장 </button>
           
            <h1 style={{ color: colour}}>{message}</h1>  

            <button style={ {color:'green'} } onClick={ 
               () => setColour('green')
            }> Green </button>

            <button style={{color:'red'}} onClick={
               () => setColour('red') 
            }> Red </button>
  
          
        </div>
    );
};

export default Say;