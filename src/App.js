import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Signin from './components/Signin';
import Chat from './components/Chat';
import Footer from './components/Footer';
import './App.css';
import Status from './components/Status'
import OTPVerify from './components/OTPVerify'
import Mount from './components/Mount';
import MyForm from './components/MyForm';
import ChatRequest from './components/ChatRequest';
import { useEffect, useState } from 'react';
import { createSocket } from '../src/Socket';


function App() {
 
  return (
  <Provider store={store}>
    {/* <Head/> */}
    <Router>
        <Routes>
            <Route exact path = '/' element = {<Signin/>}/>
            <Route exact path = '/OTPVerify' element = {<OTPVerify/>}/>
            <Route exact path = '/form' element = {<MyForm/>}/>
            <Route exact path = '/chat' element = {<Chat/>}/>
            <Route exact path = '/status' element = {<Status/>}/>
            <Route exact path = '/mount' element = {<Mount/>}/>
            <Route exact path = '/requests' element = {<ChatRequest/>}/>
          </Routes>
          
      <Footer/>
    </Router>
  </Provider>  
  );
}

export default App;
