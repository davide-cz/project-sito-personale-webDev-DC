import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import LayoutsPage from './pages/LayoutsPage'
import ContattiPage from './pages/ContattiPage'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/layouts' element={<LayoutsPage/>}/>
        <Route path='/contatti' element={<ContattiPage/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
