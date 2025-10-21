import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './Pages/HomePage/homePage';
import TelaLogin from './Pages/TelaLogin/TelaLogin';
import Telacadastro from './Pages/TelaCadastro/Telacadastro';
import TelaSuporte from './Pages/TelaSuporte/TelaSuporte';

function App() {
 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/login" element={<TelaLogin/>} />
          <Route path="/cadastro" element={<Telacadastro/>}/>
          <Route path="/suporte" element={<TelaSuporte/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App

