import React from "react";
import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { getprod } from "../Redux/action";
import { useNavigate } from "react-router-dom";
const Productpage = () => {
const dispatch = useDispatch()

  const prod = useSelector((store)=>store.appreducer.products)
  console.log(prod)

  useEffect(()=>{
    if(prod.length==0){
    dispatch(getprod())
    }
  },[])


 
  return (
    <div style={{ width: "100%" }}>
      <div>
  {prod.length>0 && prod.map((el)=>(
    <ProductCard key ={el.id} item ={el} />
  ))}
        {/* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */}
      </div>
    </div>
  );
};

export default Productpage;
