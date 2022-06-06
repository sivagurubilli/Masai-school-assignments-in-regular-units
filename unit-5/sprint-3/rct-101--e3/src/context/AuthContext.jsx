import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
       const [isauth,setisauth] = useState(false)



const toggleauth=()=>{
  setisauth(!isauth)
}


  return <AuthContext.Provider value={{isauth,toggleauth}}>{children}</AuthContext.Provider>;
};
