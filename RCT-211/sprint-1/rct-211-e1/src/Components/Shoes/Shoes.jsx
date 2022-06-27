import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getShoesFailure,
  getShoesRequest,
  getShoesSuccess,
} from "../../Redux/action";


import axios from "axios"
import { ShoeCard } from "./ShoeCard";
const Shoes = () => {
  const dispatch = useDispatch()

  const shoesdata = useSelector(store=>store.shoes)
  useEffect(()=>{
    getShoes()
  },[])
  console.log(shoesdata)

  const getShoes=()=>{
    dispatch(getShoesRequest());
    axios.get("http://localhost:8080/shoes").then(r=>{
    
    dispatch(getShoesSuccess(r.data))})
    .catch(e=>dispatch(getShoesFailure(e)))
  
  }
  return <div>{/* Map through the shoes list here */}
  
  {shoesdata.map((e)=>(
   <ShoeCard data={e}/>
  ))}
  </div>;
};

export default Shoes;
