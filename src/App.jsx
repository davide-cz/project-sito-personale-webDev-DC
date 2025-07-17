import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/Hero'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import LayoutsPage from './pages/LayoutsPage'
import ContattiPage from './pages/ContattiPage'
import NotFound from './pages/NotFound'
import Hero from './pages/Hero'
import Home from './pages/Home'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        
        <Route path='/layouts' element={<LayoutsPage/>}/>
        <Route path='/contatti' element={<ContattiPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
