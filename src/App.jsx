import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'

function App() {
  

  return (
    <>
      <Header/>
      <Banner/>
      <div className="min-h-screen"></div>
      <Footer/>
    </>
  )
}

export default App
