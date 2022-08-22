import React from "react";
import { useState } from "react";
import { getprod, postprod } from "../Redux/action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [addp,setaddp] = useState({
    title:"",
    category:"",
    price:"",
    imageSrc:"",
  })


const hadelch=(e)=>{
 const {name,value}= e.target
  setaddp({
    ...addp,
    [name]:value
  })
}


const handlesubmit=()=>{
 dispatch(postprod(addp)).then(dispatch(getprod()))
 navigate("/",{replace:true})
}
  return (
    <div>
      <h3>Add Product</h3>
      <div>
        <div>
          <label>Product title</label>
          <input data-cy="add-product-title" type="text" name ="title" value={addp.title} onChange={hadelch}/>
        </div>
        <div>
          <label>Product Category</label>
          <select data-cy="add-product-category" name ="category" onChange={hadelch}>
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div>
          <label>Product Image</label>
          <input
            data-cy="add-product-image"
            type="url"
            placeholder="Image URL"
            name="imageSrc"
            value={addp.imageSrc}
            onChange={hadelch}
          />
        </div>
        <div>
          <label>Product Price</label>
          <input data-cy="add-product-price" type="text" name="price" value ={addp.price} onChange={hadelch} />
        </div>
        <div>
          <button data-cy="add-product-button" onClick={()=>handlesubmit()}> Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
