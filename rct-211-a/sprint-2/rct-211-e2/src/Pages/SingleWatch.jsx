import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useParams} from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { getwatches } from "../Redux/AppReducer/action";
const SingleWatch = () => {

const {id} = useParams()
const dispatch = useDispatch()
const watches1 = useSelector((store)=>store.appreducer.watches)

const [currwatch,setcurrwacth] = useState({})


useEffect(()=>{
  if(watches1.length ==0){
    dispatch(getwatches())
  }
},[dispatch,watches1.length])

useEffect(()=>{
  if(id){
    const currwatch1= watches1.find(w=>w.id===Number(id))
    currwatch1 && setcurrwacth(currwatch1)
  }
},[id,watches1])
  return (
    <div>
      <h2>{currwatch.name}</h2>
      <div>
        <img src={currwatch.image} alt="Cover Pic" style={{width:"200px",height:"200px"}}/>
      </div>
      <div>
        <div>{currwatch.category}</div>
      </div>
    </div>
  );
};

export default SingleWatch;
