import React from 'react'

import PropTypes from "prop-types"
import { useState,useRef } from 'react'
import Pinitem from './Pinitem';


const Pin = ({length,setotphandler}) => {
   const inputRef =  useRef([]);
   const [inputBoxlen] = useState(new Array(length).fill(1))
  
  const [inputboxvalue,setinputboxvalue ] = useState(
    new Array(length).fill("")
  );

   const handleChange =(e,index) =>{
    inputboxvalue[index] = e.target.value;
    setinputboxvalue(inputboxvalue)
    
    if(index < length-1){
    inputRef.current[index+1].focus();
   };
   setotphandler(inputboxvalue.join(""))
};

  const handlebackspace = (e,index)=>{
   if(index>0){
    inputRef.current[index-1].focus()
  }
  inputboxvalue[index] = e.target.value;
  setinputboxvalue(inputboxvalue)
  setotphandler(inputboxvalue.join(""))
}

//console.log("1234567")


const handlePaste =(e)=>{
    e.preventDefault();
    const data = e.clipboardData.getData("text")
    .split("").filter((item,index)=>index<length);
   console.log(data)
   data.forEach((value,index)=>{
    inputboxvalue[index]= value;
    inputRef.current[index].value = value;
    if(index<length-1){
        inputRef.current[index+1].focus()
    }
   })
}


   return (


    <div    onPaste={handlePaste}     style={{display:"flex",justifyContent:"center"}}>
    {inputBoxlen.map((item,index)=>{
        return  <Pinitem style={{justifyContent:"center"}}
        
        
        ref = {(element)=>{
            inputRef.current[index] = element;
        }} 
         key={index}
      changeHandler={(e)=>handleChange(e,index)} 
   
   onBackSpaceHandler ={(e)=>handlebackspace(e,index)}
   

/>
})}


    </div>
  )
}
  Pin.propTypes ={
    pinInput: PropTypes.string,
      length: PropTypes.number,
      onChange:PropTypes.func,
  }
 




export default Pin;