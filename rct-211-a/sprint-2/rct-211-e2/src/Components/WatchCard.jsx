import React from "react";
import {useSelector} from "react-redux"
import styled from "styled-components"

const WatchCard = ({ id }) => {

  const watches1 = useSelector((store)=>store.appreducer.watches)
 const watc = watches1.find(w=>w.id==Number(id))
  return (
    <div data-testid={`watch-card-wrapper-${id}`}>
      <div>
        
        <img data-testid="watch-card-image" src={watc.image} alt=""  style ={{width:"100px",height:"100px"}}/>
      </div>
      <div>
        <div data-testid="watch-name">{watc.name}</div>
        <div data-testid="watch-category">{watc.category}</div>
      </div>
    </div>
  );
};

export default WatchCard;


const watchWrappwr= styled.div`

display:flex
`
