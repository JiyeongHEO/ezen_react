
/** 23-02-12 시작
 * [Redux] -[액션객체]: function add(data){ return{type:'TOGGLE_VALUE' (ADD등등), data:{어쩌고} }  } 
  const add = a => ({ type:'ADD', data })
  -[store]: 1Project당 1store, 현재 app~상태와 Reducer 등 중요 함수 내장.  [dispatch]:dispatch(action)을 발생시킴, 
  [subscribe]: const listener=()=>{ dispatch로 업데이트될때마다 호출당함 }; const unSubscribe = store.subscribe(listener); unSubscribe();

 * [Redux없이]: mkdir vanila-redux -> 번들러- parcel(https://ko.parceljs.org/getting_started.html)(프로젝트가 간단한경우)설치, init -> 
index.html: !+tab ->  index.js -> parcel ~.html 
-> yarn add redux
->  index.html -> index.js: 순수js
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


