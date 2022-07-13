import React, { useState } from 'react'



interface InputProps{
    onClick:(value:string)=>void;
}


const Todoinput = ({onClick}:InputProps) => {

    const [text,settext] = useState("")
  const changehandler : React.ChangeEventHandler<HTMLInputElement> =(e)=>{
settext(e.target.value)
  };


  const handleadd :React.MouseEventHandler<HTMLButtonElement>=()=>{
    onClick(text)
  }

  return (
    <div>
        <input  type ={'text'} value ={text}
          onChange={changehandler}/>
        <button  onClick={handleadd}>Add</button>
    </div>
  )
}

export default Todoinput