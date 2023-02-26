import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { legacy_createStore as createStore} from 'redux'
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware } from 'redux';  //[Logging MiddleWare]
import loggerMiddleware from './lib/loggerMiddleware'; //[Logging MiddleWare]
import {createLogger} from 'redux-logger' //[Logging MiddleWare]
import ReduxThunk from 'redux-thunk';

/* 
*2023-02-26 시작 (yarn create react-app middleware )
* redux-미들웨어: yarn add redux react-redux redux-actions -> modules폴더에 counter.js, -> index.js(Reducer,combineReducers,제일먼저 실행) 
-> src폴더의 index.js -> composeWithDevTools 추가 
-> [Logging MiddleWare]: store에 같이 넣음 -> createLogger()사용
*/

const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(rootReducer , composeWithDevTools()) //여기 DevTools추가

const logger = createLogger() //② 여기[Logging MiddleWare]
//const store = createStore(rootReducer , applyMiddleware(loggerMiddleware))  //① 여기[Logging MiddleWare]
const store = createStore(rootReducer , applyMiddleware(logger, ReduxThunk )) //②여기[Logging MiddleWare] -> 비동기시 1.[redux-thunk]



root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();