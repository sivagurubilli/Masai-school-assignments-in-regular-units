import { useState } from "react";

/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/
export const useCounter = ({initialValue,minValue,maxValue}) => {

  const [countValue,setcountValue]  =useState(initialValue)



  const incCount = (e) => {
 if(e==undefined && countValue<=maxValue-1){
 setcountValue(countValue+1)
 } if(countValue<=maxValue-e){
  setcountValue(countValue+e)
 }
  };
  const decCount = (e) => {

    if(e==undefined && countValue>= minValue+1){
      setcountValue(countValue-1)
    }if(countValue >= minValue+e){
      setcountValue(countValue-e)
    }
  };
  return {
    countValue,
    incCount,
    decCount,
  };
};
