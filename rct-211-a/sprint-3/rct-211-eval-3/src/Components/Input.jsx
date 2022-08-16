//Complete the custom Input component based on the props that it expects to receive
import React,{useState} from "react";
export const Input = ({type,size,varient,value,onChange}) => {

  
const [val,setval] = useState(value)
 


 const handlech1=(event)=>{
setval(event.target.value)
}
onChange(val)

  return <input id ="name" value={val} onChange={handlech1} style ={{type:type||"text",size:size||"md",varient:varient}}  />;
};
