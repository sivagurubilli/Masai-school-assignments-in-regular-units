import { createContext,useState } from 'react'

import React from 'react'

export const Authcontext = createContext()



 const AuthcontextProvider = ({children}) => {

    const [isauth,setisauth] = useState(false)

    const toggleauth =()=>{
        setisauth(!isauth)
    }
  return (
    <Authcontext.Provider value={{isauth,toggleauth}}>
        {children}
    </Authcontext.Provider>
  )
}

export default AuthcontextProvider