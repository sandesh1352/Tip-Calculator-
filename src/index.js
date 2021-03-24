import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Input from './Components/Input'

ReactDOM.render(
  <React.StrictMode>
    <Header/>
    <Input/>
    <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);


