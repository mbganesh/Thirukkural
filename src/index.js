import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllKural from './AllKural';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/Thirukkural'>
      <Routes>
          <Route path='/' exact element={ <App/> } />
          <Route path='/Thirukkural' exact element={ <App/> } />
          <Route path='/kural' exact element={ <AllKural/> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
