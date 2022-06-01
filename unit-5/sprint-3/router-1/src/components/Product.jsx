import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect ,useState} from "react"
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
   // console.log(name)
  return (
      
    <div>Product :{id}
    
    <div>{product.name}</div>
    </div>
  )
}

export default Product

