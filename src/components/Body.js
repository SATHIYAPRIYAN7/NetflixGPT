import React, { useEffect } from 'react'
import Header from './Header'
import Login from './Login'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/Firebase';
import { useDispatch } from 'react-redux';
import { adduser, removeUser } from '../utils/userSlice';
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import Browse from './Browse';
function Body() {

 
  return (
    
    <BrowserRouter>
        <Header/>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />

      </Routes>
  </BrowserRouter>
  )
}

export default Body