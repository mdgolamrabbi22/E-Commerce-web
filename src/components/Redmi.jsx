import React from 'react'
import { useEffect, useState } from "react"



export default function Redmi(props) {
    const {handleAddToCart} = props

    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("./redmi.JSON")
        .then(res=>res.json())
        .then(data=>setProducts(data))
  },[])

  return (
    <div >
      
    <h1 className="text-center text-4xl m-10 text-amber-500 font-bold"> Redmi Phone</h1>
    <div className="grid grid-cols-3 gap-3">
  {
      products.map(product=><div className="card bg-base-100 w-96 shadow-xl">
        
        <div className="card-body">
        <img src={product.image} /> 
          <h2 className="card-title">{product.name}</h2>
          <p>{product.description}</p>
          <p>৳ {product.price}</p>
          
          <p>{product.brand}</p>
          <p>{product.availability}</p>
          <div className="card-actions justify-end">
            <button onClick={()=>handleAddToCart(product)} className="btn btn-primary text-white">Buy Now</button>
          </div>
        </div>
      </div>
      )
    }
  </div>
 
  </div>
  )
}
