import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { applyMiddleware, legacy_createStore as createStore} from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
// import loggerMiddleware from './lib/loggerMiddleware';
//import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';

const root = ReactDOM.createRoot(document.getElementById('root'));
const logger = createLogger();
const store = createStore(rootReducer, applyMiddleware(logger, ReduxThunk));

root.render(
 <Provider store={store}>
    <App />
 </Provider>
);