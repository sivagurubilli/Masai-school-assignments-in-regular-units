
import { useState } from "react";

import React,{createContext}  from "react";

export const AuthContext = createContext()

export const AuthProvider=({children})=>{
    const [isauth,setisauth] = useState(false);

    const login =()=>{
        setisauth(true)
    }

    const logout =()=>{
setisauth(false)
    }
    return(

        <AuthContext.Provider value= {{isauth,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}