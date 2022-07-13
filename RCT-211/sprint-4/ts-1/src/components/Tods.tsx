import React,{useState} from 'react'
import Header from './Header'
import Todoinput from './Todoinput'


export todos


const Tods = () => {
const [todos,settodos] = useState([])

const handleAdd ={title:string}=>{
    const payload={
        title,
        status:false,
        id:todos.length+1,
    }
    settodos([...todos,payload])
}
  return (
    <div>
        
        <Header label ="todos"/>
       <Todoinput onClick={handleAdd} />

    </div>
  )
}

export default Tods