import React from 'react'
import { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'


const Allproducts = () => {

    const [products,setproducts] = useState([])
  useEffect(()=>{
      const fetchp = async()=>{
          let r = await fetch("http://localhost:8080/products")
      let data = await r.json()

      setproducts(data)
      
        }
        fetchp()
  },[])
  
  
    return (
    <div>Allproducts:{" "}
    
   <div>
    <thead>
            <tr>
                <th>product name</th>
                <th>price</th>
                <th>more det</th>
            </tr>
            </thead>
            </div>
            <tbody>
        {products.map((e)=>(
       
            <tr key ={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.price}</td>
                <td key={e.id}>
 <Link to ={`/products/${e.id}`}>{e.name}</Link>
 </td>
           </tr>
        ))}
        </tbody>

    
    
    </div>
  )
}

export default Allproducts
