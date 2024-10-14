import React from 'react'
import bbg from '../assets/bbg.avif'



export default function Banner() {
  return (
   <div className="business-theme">
    <img src={bbg} alt="" className='background-image' />
    <div className="content font-sans">
      <h1>NextGenMobiles Comany</h1>
      <p>Here you can buy all kind's of good quality Mobile's.</p>

    </div>
   
     
   </div>
  )
}
