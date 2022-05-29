import React from 'react'
import { useEffect, useState } from 'react'
import axios from "axios"


const Todo = () => {
    const [count, setCount] = useState(0)
    const [todos,settodos]=useState([])
    const [totalcount,settotalcount] = useState(0)
    const [newtodo,setnewtodo]=useState({
     value:"",
     isCompleate:false
    })
    const [page,setpage] = useState(1)
    const [limit,setlimit] = useState(5)
    
    useEffect(()=>{
      const gettodo =async()=>{
          var d = await axios.get(`http://localhost:8080/todos?_page=${page}&_limit=${limit}`)
     
          settodos(d.data)
     settotalcount(Number(d.headers['x-total-count']))
        }
        gettodo()
       
      },[page,limit])
    
 const handlech=(e)=>{
   let {name,value} =e.target
   setnewtodo({...newtodo,[name]:value})
}
     
    const settodo =()=>{
     axios.post("http://localhost:8080/todos",newtodo).then(r=>
   settodos([...todos,r.data])
     )
     setnewtodo("")
    
    }
    
    {/*} const settodo=()=>{
    fetch('http://localhost:8080/todos',{
      method:'POST',
      headers:{
    "content-type":"application/json"
      },
      body:JSON.stringify({
         value:newtodo,
         isCompleate:false
      }),
    }).then((r)=>r.json())
    .then((d)=>{
      settodos([...todos,d])
      setnewtodo("")
    })
    
     }*/}
    
      return (
        <>
        <div className="App" onClick={()=>setCount(count+1)}>
         
    
           <input  name="value" onChange={handlech} />
           <button onClick={()=>settodo()}>save</button>
        </div>
        {todos.map((e)=>{
            return <h1 key ={e.id}>{e.id}::{e.value}</h1> 
            })}
                <button
                disabled={page<=1}
                onClick ={()=>{
                  if(page>1){
                    setpage(page-1)
                  }
                }}
                >{"<"}</button>
    
        <button
    disabled ={totalcount<page*limit}
        onClick ={()=> setpage(page+1)}
        >{">"}</button>
    <select  onChange ={(e)=>setlimit(Number(e.target.value))}>
    
    <option value ={5}>5</option>
      <option value ={10}>10</option>
    
      <option value ={20} >20</option>
    
    </select>
    <input
    type="number"
    value={limit}
    min={0}
    max ={totalcount}
    onChange ={(e)=>setlimit(Number(e.target.value))}
    
    />
    
    
        </>
      )
}

export default Todo