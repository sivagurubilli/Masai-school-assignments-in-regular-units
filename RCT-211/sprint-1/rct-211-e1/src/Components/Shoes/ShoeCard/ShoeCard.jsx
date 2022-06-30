import React from "react";

const ShoeCard = ({data}) => {
  const shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} style={{"display":"flex","margin":"30px 30px"}}>
      <img data-cy="shoe-card-image" alt="shoe" src={data.image} style={{"height":"150px"}} />
      <div>
        <div data-cy="shoe-name">{data.name}</div>
        <div>
          In Cart:
          <div data-cy="shoe-count">0</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
