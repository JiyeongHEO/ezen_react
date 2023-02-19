//const { createStore } = require("redux"); //deprecated표시있음
import { legacy_createStore as createStore} from 'redux'

/** 23-02-12 시작
 * 23-02-19 시작
 * [액션객체]
  - 1.[Redux]: 상태변화 필요할떄, (type, data) 형식 eg) //일반함수 function add(data){ return{ type:'TOGGLE_VALUE' (ADD등등), data:{어쩌고} }  }  
  //화살표함수 const add = a => ({ type:'ADD', data })
  - 2.[reducer]: 액션발생시 (현재상태+param) 받아서 새로운상태 만들어줌
  - 3.[store]: 1Project당 1store, 현재 app~상태와 Reducer 등 중요 함수 내장 -> 5. [dispatch]:dispatch(action): action을 발생시킴, 
    4.[subscribe]: const listener=()=>{ dispatch로 업데이트될때마다 호출당함 }; 
    const unSubscribe = store.subscribe(listener); 
    unSubscribe();

 * [Redux없이]: mkdir vanila-redux -> 번들러- parcel(https://ko.parceljs.org/getting_started.html)(프로젝트가 간단한경우)설치, init -> 
index.html: !+tab ->  index.js -> parcel ~.html 
-> yarn add redux
->  index.html -> index.js: 순수js -> 
 
시작 yarn add parcel-bundler -> 'yarn parcel index.html'

 */

const divToggle=document.querySelector('.toggle')
const counter=document.querySelector('h1')
const btnIncre=document.querySelector('#increase')
const btnDecre=document.querySelector('#decrease')

//액션name
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE"
const DECREASE = "DECREASE"

//액션함수 정의
const toggleSwitch=()=>( {type:TOGGLE_SWITCH} )
const increase=difference => ( {type:INCREASE, difference} )
const decrease = ()=>( {type:DECREASE} );


/*
23-02-19.
2. reducer 
*/
const initialState={
    counter:0,
    toggle:false
}

function reducer(state = initialState, action){ //state가 없을때는 initial~로한다.
    console.log("1")
    switch(action.type){
        case TOGGLE_SWITCH: return{
            ...state, toggle: !state.toggle //불변성유지위한 '...'
        }
        case INCREASE: return{
            ...state, counter: state.counter + action.difference
        }
        case DECREASE: return{
            ...state, counter: state.counter - 1
        }
        default:
            return state;
    }
}

/* 3. store */
const store = createStore(reducer);

const render =()=>{
    console.log("2")
    const state = store.getState(); //현재상태를 불러옴
    if(state.toggle){
        divToggle.classList.add('active')
    }else{
        divToggle.classList.remove('active')
    }
    counter.innerText = state.counter;
}

render(); //상태update시마다 호출

/* 4. subsbribe: 초기말고 store가 바뀔대마다 render() */
store.subscribe(render);

/* 5. dispatch */

divToggle.onclick = ()=>{
    console.log("3") // -> 1 -> 2
    store.dispatch(toggleSwitch())
}
btnIncre.onclick = () =>{
    console.log("3-1")
    store.dispatch(increase(5))
}
btnDecre.onclick = () =>{
    console.log("3-2") 
    store.dispatch(decrease())
}

/* [Redux 3규칙] ①1개stroe, ②읽기전용상태(불변성,얕은 비교만해서 성능유지함),  ③reducer는 순수'함수'여야함(param외에는 의존하면안됨, 이전상태 절대 건들면안됨-새로운상태객체를 만들어야함, 똑같은param에서 항상 같은 결과반환해야함-날짜,네트워크요청등 넣으면 안됨)   */

/* [React환경에서]: yarn create react-app react-redux -> 이동

*/
