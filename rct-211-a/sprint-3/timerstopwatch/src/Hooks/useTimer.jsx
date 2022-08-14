import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"


export const useTimer =()=>{
  const [hour1,sethour] = useState(0)
  const [min1,setmin] = useState(1)
  const [sec1,setsec] = useState(0)

  const counterref = useRef(null)

  

 const onStart=()=>{
    counterref.current = setInterval(() => {
      setsec((sec1)=>{
  let a = +sec1;
  if(a<=10 && a>0){
    return "0"+(a-1);
  }else if(a<0){
    return "59"
  }
  return a-1
      })
    }, 1000);
 }


 if(sec1<0){
setsec("59")
let a = +min1;
if(a<=10 && a>0){
  setmin("0"+(a-1))
}else{
  setmin(a-1)
}
 }
 if(min1<0){
  setmin("59")
  let a = +hour1
  if(a<=10 && a>0){
    sethour("0"+(a-1))
  }else{
    sethour(a-1)
  }
 }
if(sec1==0 && min1==0 && hour1==0){
  clearInterval(counterref.current)
}

const onStop=()=>{
  clearInterval(counterref.current)
}
const reset1 =()=>{

  clearInterval(counterref.current)


  sethour("00")
  setmin("00")
  setsec("00")
}
const handlech=(el)=>{
    if(el.target.id  === "sec"){
      if(el.target.value>59){
        setsec(59)
      }else if(el.target.value<0){
        setsec("00")
      }else{
       setsec(el.target.value)
      }
    }
    if(el.target.id  === "min"){
      if(el.target.value>59){
        setmin(59)
      }else if(el.target.value<0){
        setmin("00")
      }else{
       setmin(el.target.value)
      }
    }
    if(el.target.id  === "hour"){
      if(el.target.value>59){
        sethour(59)
      }else if(el.target.value<0){
        sethour("00")
      }else{
       sethour(el.target.value)
      }
    }
}







return {sec1,min1,hour1,onStop,onStart,reset1,handlech}
}