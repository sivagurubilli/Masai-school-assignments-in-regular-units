

import { useEffect,useRef,useState } from "react";


export const useStopwatch=()=>{
    const [sec,setsec] = useState(0)
    const [min,setmin] = useState(0)
    const [hour,sethour] = useState(0)
  const [act,setact] = useState(false)
const   secref = useRef(null)
const minref = useRef(null)
const hourref = useRef(null)
 const pause =()=>{
    clearInterval(secref.current)
    clearInterval(minref.current)
    clearInterval(hourref.current)
 }
 const reset =()=>{
    clearInterval(secref.current)
    clearInterval(minref.current)
    clearInterval(hourref.current)
    setsec(0)
    setmin(0)
    sethour(0)
 }


 const start =()=>{
    secref.current = setInterval(()=>{
        setsec(prev =>{
            if(prev >= 60){
                
               return 0
                
            }
          return prev+1
        })
    },1000)

    minref.current = setInterval(()=>{
        setmin(prev =>{
            if(prev >= 60){
                
                return 0
                
            }
            return prev+1
        })
    },60000)
    hourref.current = setInterval(()=>{
        sethour(prev =>{
            if(prev >= 60){
                
                return 0
                
            }
            return prev+1
        })
    },360000)
}



  return {sec,start,min,pause,hour,reset}
}




