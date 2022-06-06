import React from "react";
import { useEffect } from "react";
import {Product} from '../Products/Product/Product'
import { useState } from "react";
import axios from "axios"

const Products = () => {
const [products,setproducts] = useState([])

  useEffect(()=>{
fetchprod()
  },[])



  const fetchprod =()=>{
fetch("http://localhost:8080/products").then((r)=>r.json()).then((d)=>
console.log(d)

)
 

  }




  return <div>{/* Code here */}
  
    {products.map((e)=>(
      <Product product={e} />

    ))}

  
  </div>;
};

export default Products;
