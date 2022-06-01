import React from 'react'
import { useEffect ,useState} from "react"
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
const Products = () => {


    const [products,setproducts] = useState([])
  
  useEffect(()=>{
      const fetchp = async()=>{
let r = await fetch("http://localhost:8080/products");
let data = await r.json()
setproducts(data)
      }
      fetchp()
  },[])
  
    return (


    <div>Products:{" "}
<div style ={{display:"grid",gridTemplateColumns:"1fr 1fr"}}>      
      
      <div>      {products.map((p)=>{
            return <h3 key ={p.id}>
                
               <Link to={`/products/${p.id}`}>{p.name}</Link></h3>
        })}
    </div>
    <Outlet />
    </div>
    </div>


  )
}

export default Products