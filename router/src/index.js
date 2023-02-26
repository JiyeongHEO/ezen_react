import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';//23-02-05 추가

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
   <App />
  </BrowserRouter>

);


