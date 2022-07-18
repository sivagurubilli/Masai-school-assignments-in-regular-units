import React from 'react'
import { useMemo } from 'react';
const delay = (ms)=>{
    const start = Date.now()
    while(Date.now() - start < ms){
        continue;
    }
    return true;
}

const TodoItem = ({status,id,title,togglestatus,deletetodo}) => {

    const isDelayed = useMemo(()=>delay(200),[]);
    
console.log("todo render",id)
  return (
    <div>

<div>{title}</div>
<div>{status ? "True":"false"} </div>
    
    <button onClick={()=>togglestatus(id)}>toggle</button>
    <button onClick={()=>deletetodo(id)}>delete</button>
    </div>
  )
}
  function areequal(prevProps,nextProps){
    if(prevProps.id === nextProps.id && prevProps.status === nextProps.status){
        return true
    }
    return false
  }
export default  TodoItem