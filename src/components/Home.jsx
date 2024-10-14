import React from 'react'
import Banner from './Banner'
import Redmi from './Redmi'
import Realme from './Realme'
import Apple  from './Apple'
import Oneplus from './Oneplus'
import Samsung from './Samsung'
import Tecno from './Tecno'


export default function Home() {
  return (
    <div>
      
      <Banner></Banner>
      <h1 className='text-center text-4xl m-10 text-amber-500 font-bold' >Our All Products</h1>
      <Redmi/>
      <Realme></Realme>
      <Apple></Apple>
      
      <Oneplus></Oneplus>
      <Samsung></Samsung>
      <Tecno></Tecno>
    </div>
  )
}
