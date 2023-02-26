import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore} from 'redux'

import rootReducer from './modules';
import { composeWithDevTools } from 'redux-devtools-extension'  //[composeWithDevTools() 확장프크]

import { Provider } from 'react-redux';


/* 2023-02-19 */
const root = ReactDOM.createRoot(document.getElementById('root'));
const store= createStore(rootReducer, composeWithDevTools())

root.render(
   
    <Provider store={store}>
      <App />
    </Provider>
  
);


