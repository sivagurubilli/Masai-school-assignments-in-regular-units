import React from "react";
import { useState } from "react";
import { useSelector ,useDispatch} from "react-redux";
import { useSearchParams,useParams } from "react-router-dom";
import { editprod, getprod } from "../Redux/action";

const Editpage = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  const prod = useSelector((store)=>store.appreducer.products)
const {id } = useParams()

const currprod = prod.find((item)=>item.id==id)
const [title,settitle] = useState("")
const [price,setprice] = useState("")


const handleup =(id)=>{
  console.log(id)
  if(currprod){
   const payload ={
    title:title,
    price:price
   }
   dispatch(editprod(id,payload)).then(dispatch(getprod()))
   console.log("ji")
  }
}

  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input data-cy="edit-product-title" type="text" onChange ={(e)=>settitle(e.target.value)} />
      </div>
      <div>
        <label>Product Price</label>
        <input data-cy="edit-product-price" type="number" onChange ={(e)=>setprice(e.target.value)} />
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button data-cy="update-button" onClick ={()=>handleup()}>Update</button>
      </div>
    </div>
  );
};

export default Editpage;
