
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useTimeout = () => {
    const [ready,setready] = useState()
    useEffect(()=>{
      let timer = setTimeout(()=>{
        setready(true)
      },3000)
      return ()=>{
    clearTimeout(timer)
    }},[]);
    
    
    return ready
  
}

export default useTimeout