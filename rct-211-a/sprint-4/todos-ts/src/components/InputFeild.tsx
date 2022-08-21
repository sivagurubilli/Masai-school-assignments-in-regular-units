import React,{useRef} from 'react'
import "./style.css"

interface Props{
    todo : string;
    settodo: React.Dispatch<React.SetStateAction<string>>
    handleadd:(e:React.FormEvent)=>void;

}
const InputFeild :React.FC<Props> = ({todo,settodo,handleadd } ) => {
  const inputRef = useRef<HTMLInputElement>(null)
  
  
    return (
   <form className='input' onSubmit={(e)=>{
   handleadd(e)
   inputRef.current?.blur()
   }}>
    <input 
      ref = {inputRef}    
    type="input" 
    value={todo}
    onChange={(e)=>settodo(e.target.value)}
    placeholder ="enter a task" 
    className = "inputbox" />
    <button className ="inputsubmit" 
    
    type="submit">go</button>
   </form>
  )
}

export default InputFeild