import { useState } from "react";

export const useCounter = (init) => {
const {initialValue,minValue,maxValue} = init
     
     const [count,setcount] = useState(initialValue)
   
    const incCount=((e)=>{
        
        if(e == undefined && count<= maxValue-1){
          setcount(count+1)
        }
        if(count<= maxValue-e){
           
             setcount(count+e)
            
        }
    })
    
    const decCount =((e)=>{
        
        if(e == undefined && count >= minValue+1){
            setcount(count-1)
          }
        if(count >= minValue+e){
            setcount(count-e)
        }
    })
  
     return {count,incCount,decCount}
};



