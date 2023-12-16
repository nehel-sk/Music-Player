import React from "react";
import { Routes,Route } from 'react-router-dom'
import Login from './Pages/Login/Login'
import Verification from './Pages/Verification/Verification'
import Songs from './Pages/Main/Songs'
import './App.css'

function App() {
  return (
    <div>
        
        <Routes>
          <Route index element={<Login/>}/>
          <Route path="/verification" element={<Verification/>}/>
          <Route path="/songs" element={<Songs/>}/>
        </Routes>
    </div>
    
  );
} 

export default App; 
  