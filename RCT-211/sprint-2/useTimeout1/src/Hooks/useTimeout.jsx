import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const useTimeout= (delay) => {

    const [ready,setready] = useState(true)
    useEffect(()=>{
        let timer = setTimeout(()=>{
            setready(false)
        },delay)
        return ()=>{
            clearTimeout(timer)
        }
    },[delay])
 return ready;
  
}

export default useTimeout