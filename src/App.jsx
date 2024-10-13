import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Redmi from './components/Redmi'
import Realme from './components/Realme'
import Apple from './components/Apple'
import Oneplus from './components/Oneplus'
import Samsung from './components/Samsung'
import Tecno from './components/Tecno'




function App() {
  

  return (
    <>

    
    <Header/>
    <Banner/>
    <h1 className='text-center text-4xl m-10 text-amber-500 font-bold' >Our All Products</h1>
    <Redmi/>
    <Realme/>
    <Apple/>
    <Oneplus/>
    <Samsung/>
    <Tecno/>
    <div className="min-h-screen"></div>
    <Footer/>
  </>
  )
}

export default App
