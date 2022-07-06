import { useState } from 'react'

import { useEffect } from 'react'



function useFetch() {

  const [data,setdata] = useState([])
  
  const [loading,setloading]= useState(true)
  
  const [error,seterror]= useState(false)

  const fetchData=()=>{
    
    
    
    fetch("https://api.github.com/search/users?q=masai")
    .then((r)=>r.json())
    .then((r)=>{
      setdata(r.items)
      setloading(false)
    })
   .catch((e)=>{
        seterror(true) ;setloading(false)
      })
    
   }

   useEffect(()=>{
    fetchData()
   },[])
  return {data,loading,error}
  
}

export default useFetch