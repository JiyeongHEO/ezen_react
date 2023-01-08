/*시작 2023-01-08 -> rcc +tab (class자동생성)
 [이벤트]
* (e) 객체: SyntheticBaseEvent {_reactName: 'onChange'... -> 계속 초기화됨
* https://reactjs.org/docs/events.html :react 내장method
* handleChange, handleClick : e없음, handleKeyPress.
* class형-> 함수형-> 비구조화처리까지
* [ ref ]
react에서의 js의 id와 같음. (dom에 부여한이름). 03.ref내용.html.
    +) dom 꼭사용하는경우: 특정input focus, 스크롤박스 조작시, canvas에그림넣을때 
    +)사용법- case 1. 특정input focus: 1) 그냥callBack으로 (ValidationSample.js(css) + App.js수정)  2)createRef(react내장, v16이상) - RefSample.js (current가 차이점)
    +) case2. 스크롤박스 조작시: 실행은 부모compo에서. ScrollBox.js -> App.js에서 버튼만들어서 scrolltoBottom 부름

* 반복: IterationSample.js 
    +) 그냥map돌리면: need~~unique "key" prop. -> key추가(key={idx})
    +) useStatet사용
    +) concat(수정시) filter(삭제시) 쓰기

* [ Hook ] : hooks-tutorial폴더로..... Counter.js 부터.
*/


//[1.] class형으로. rcc + tab
// import React, { Component } from 'react';

// class EventPractice extends Component {

//     state = {
//         message: '',
//         username:''
//     }
//     // constructor(props){  // 예전방식임 -> 아래처럼 화살표함수로 변경해서 바로씀(constructor 생략버전)
//     //     super(props);  //from 부모
//     //     this.handleChange = this.handleChange.bind(this);
//     //     this.handleClick = this.handleClick.bind(this);
//     // }

//     handleChange = (e) => {
//         // this.setState( { message: e.target.value } ) //input하나일때
//         this.setState( { [e.target.name]: e.target.value  }) //input추가시
//     }
//     handleClick = () => {
//         // console.log(this.state.message);   //input하나일때
//         // this.setState( { message: '' } )
//         console.log(this.state.username +": "+  this.state.message); //input추가시
//         this.setState(  { message: '', username:'' })
//     }
//     handleKeyPress = (e) => { 
//         if(e.key == 'Enter'){
//             this.handleClick();
//         }
//     }


//     render() {
//         return (
//             <div>
//                 <h1>이벤트연습</h1>

//                 {/* <input type="text" name="namemessage" placeholder="type anything..." value={this.state.message} onChange={(e)=>{
//                     //console.log(e.target.value);
//                     this.setState({ message: e.target.value  })
//                     }}></input>
//                 <button onClick={()=>{
//                     console.log(this.state.message); 
//                     this.setState({message:''})
//                 }}>확인</button> */}

//                 <input type="text" name="username" placeholder="type anything..." value={this.state.username} onChange={ this.handleChange}></input>
//                 <input type="text" name="message" placeholder="type anything..." value={this.state.message} onChange={ this.handleChange } onKeyPress={ this.handleKeyPress }></input>

//                 <button onClick={
//                     this.handleClick
//                 }>확인</button>

//             </div>
//         );
//     }
// }

//export default EventPractice;


/** [2.] 함수형으로: this.state.~~ 이 다 사라짐, rcc +tab  */
// import React, {useState} from 'react';

// const EventPractice = () => {
//     const [username, setUserName] = useState('');
//     const [message, setMessage] = useState('');
//     const onChangeuserName = (e)=> setUserName(e.target.value);
//     const onChangeMessage = (e)=> setMessage(e.target.value);

//     const onClick = () => {
//         console.log(username +": "+  message); 
//         setUserName('');
//         setMessage('');
//     }
//     const onKeyPress = (e)=>{
//         if(e.key == 'Enter'){
//             onClick();
//         }
//     }

//     return (
//         <div>
//              <h1>이벤트연습</h1>

//             <input type="text" name="username" placeholder="type name..." value={username} onChange={ onChangeuserName }></input>

//             <input type="text" name="message" placeholder="type message..." value={message} onChange={ onChangeMessage } onKeyPress={ onKeyPress }></input>

//             <button onClick={ onClick }>확인</button> 
//         </div>
//     );
// };

// export default EventPractice;



/** [3.] 비구조화 할당처리로 reFactoring :[form, setForm]사용, nextForm생성법 */
import React, {useState} from 'react';

const EventPractice = () => {
    const [form, setForm] = useState({username:'', message:''});
    const {username, message } = form;
   
    const onChange = e => { const nextForm = { ...form, [e.target.name] : e.target.value }; setForm(nextForm);  }

    const onClick = () => {
        console.log(username +": "+  message); 
        setForm({ username: '', message: '' })
    }
    const onKeyPress = (e)=>{
        if(e.key == 'Enter'){
            onClick();
        }
    }

    return (
        <div>
             <h1>이벤트연습</h1>

            <input type="text" name="username" placeholder="type name..." value={username} onChange={ onChange }></input>

            <input type="text" name="message" placeholder="type message..." value={message} onChange={ onChange } onKeyPress={ onKeyPress }></input>

            <button onClick={ onClick }>확인</button> 
        </div>
    );
};

export default EventPractice;