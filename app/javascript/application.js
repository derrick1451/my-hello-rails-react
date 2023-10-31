import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './features/store'
import Greetings from './components/greetings';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

function App() {
  return ( <Routes>
    <Route path="/" element={<Greetings />} />
  </Routes>);
}

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
  <App/></Provider>
  </BrowserRouter>
  ,
  document.getElementById('root'),
);