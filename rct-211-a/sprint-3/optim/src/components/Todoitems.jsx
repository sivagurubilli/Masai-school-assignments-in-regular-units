import React from 'react'

const expensiveoperation =(ms)=>{
    const start = Date.now();
    while(Date.now() - start < ms){
        continue;
    }
    return true;
}

const Todoitems = ({status,id,title}) => {
  const isitdone = expensiveoperation(200)
    return (
    <div style={{display:"flex",justifycontent:"center"}}>   
    
     <div>{title} </div>
    <div>{status?"true":"false"}</div>

   </div>

  )
}

export default React.memo(Todoitems);