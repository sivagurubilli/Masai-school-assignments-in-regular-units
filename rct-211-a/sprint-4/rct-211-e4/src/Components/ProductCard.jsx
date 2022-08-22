import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item ,deletep}) => {
  const navigate = useNavigate()
  const editp=(id)=>{
    navigate(`/edit/${id}`)
  }

  

  return (
    <div data-cy={`product-card-${item.id}`}>
      <div data-cy="product-card-name">{item.title}</div>
      <div data-cy="product-card-category">{item.category}</div>
      <div>
        <img data-cy="product-card-image" src={item.imageSrc} alt="Product" style={{height:"100px",width:"100px"}} />
      </div>
      <div data-cy="product-card-price">€{item.price}</div>
      <div>
        {/* Add a onClick handler for delete functionality */}
        <button data-cy="delete-button" onClick={()=>deletep(item.id)}>Delete Product</button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}
        <button data-cy="edit-button"  onClick={()=>editp(item.id)}>Edit Product</button>
      </div>
    </div>
  );
};

export default ProductCard;
