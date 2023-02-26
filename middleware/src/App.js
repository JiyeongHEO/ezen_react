import logo from './logo.svg';
import './App.css';
import CounterContainer from './containers/CounterContainer';
import SampleContainer from './containers/SampleContainer';
/* 
*2023-02-26 시작 (yarn create react-app middleware )
*[redux-미들웨어]: 액션 --> '미들웨어' --> reducer --> store. 

기본환경시작(counter) -->  yarn add redux react-redux redux-actions -> modules폴더에 counter.js, -> index.js(Reducer,combineReducers,제일먼저 실행) 
-> src폴더의 index.js -> components폴더, containers폴더([connect]사용) 
-> composeWithDevTools 확장프그 상태관리 :index.js
<-- 끝

[Logging MiddleWare] const loggerMiddleware  = store => next => action => {기본구조},  //next: store의 dispatch와 비슷함. 차이는 next(action)으로 부르면 미들웨어~reducer까지 액션 넘겨줌. 중간에서 조건넣어서 액션무시or변경or여러번 dispatch같은 액션제어 가능, 비동기작업(eg 네트워크요청)에 유용
1.이전상태 2.액션정보 3.업데이트된 상태 : lib 폴더->loggerMiddleware.js ->  index.js에서 적용
-> yarn add redux-logger 설치(createLogger()) : index.js

+) 비동기시 1.[redux-thunk] yarn add redux-thunk. 비동기작업때 가장 많이 사용하는 middleware. 객체가아닌 함수(thunk)형태의 액션을 dispatch가능,const addonThunk =x => addOne(x); //x=>x+1하는 작업.이게 미루기가능 ->  const fn = addOneThunk(1); setTimeout(()=>{const value=fn();}, 1000) //1초후 실행하게미룸
 이후 미들웨어가 store의 dispatch아 getState를 넣어 호출해줌. const sampleThunk=()=>(dispatch, getState)=>{ 현재상태, 새 액션 디스패치 }
 : index.js 에서 store에 넣어줌 -> counter.js에 1초이후 실행되게 변경 -> CounterContainer.js에서 적용 (loggerMiddleware.js에서 실행위치 확인)
 -> https://jsonplaceholder.typicode.com/ + (posts/1, users등) query로 데이터테스트 가능

+추가) yarn add axios -> lib폴더에 api.js 생성(getPost,getUsers 함수) -> moduels폴더에 sample.js생성,성공실패 처리하는 thunk함수 + reducer함수(handleActions()) ->index.js에서 sample.js추가 -> Components폴더 Sample.js 생성하여 화면으로 보이게..! -> SampleContainer.js생성하여 connect이용 

*[ReFactoring]: lib폴더에 createReactThunk.js 생성 -> modules에 smaple.js에 적용
modules에 loading.js생성 -> index.js에 추가 -> createReactThunk.js, sampleContainer.js 수정
->sample.js 불필요다 제거, SampleContainer.js에서 async로

2. [redux-saga] 위에꺼 다음 많이씀, '특정 액션 디스패치'시 '다른 액션 디스패치'하는 로직만들어서 처리가능
사용하는경우 1) 기존요청 취소시(중복시) 2)특정액션후 다른액션발생위해, 리덕스와 관계없는 코드 실행시 3) 웹소켓(HTML5의 표준, ajax)사용시 3)API요청 실패해서 재요청시.
ES6에서는 generator함수를 사용한다(*표시)
+) function* generatorFunction(){
    console.log('hello');
    yield 1;
    console.log('generator function');
    yield 2;
    console.log('function*')
    yield 3;
    return 4;
}
const generator = generatorFunction();
generator.next();
VM139:2 hello
{value: 1, done: false}done: falsevalue: 1[[Prototype]]: Object
generator.next();
VM139:4 generator function
{value: 2, done: false}
generator.next();
VM139:6 function*
{value: 3, done: false}
generator.next();
{value: 4, done: true}




*/
function App() {
  return (
    <div className="App">
        <CounterContainer />
        <SampleContainer />
    </div>
  );
}



export default App;
