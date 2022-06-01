
import { useParams } from 'react-router-dom'
import React from 'react'
import { useState } from "react"
import { useEffect } from 'react'


const Product = () => {
    const [product,setproduct] = useState({})
  const {id} = useParams()

  useEffect(()=>{
      if(id){
          fetch(`http://localhost:8080/products/${id}`)
.then((r)=>r.json())
.then((d)=>setproduct(d))


        }
        
       
  },[id])
 
    return (
       
        <div>Product :
           
    <div>{product.name}</div>
    <div>{product.price}</div>
    </div>
)
}

export default Product