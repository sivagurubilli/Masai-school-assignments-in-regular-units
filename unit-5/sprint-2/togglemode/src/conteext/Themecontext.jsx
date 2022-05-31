import React from 'react'
import {useState,createContext} from 'react';
import { useContext } from 'react';

export const Themecontext = createContext();



const ThemecontextProvider = ({children}) => {
const [isDarkmode,setIsdarkmode] = useState(false);

const toggledarkmode =()=>{
    setIsdarkmode(!isDarkmode)
}

  return (
   <Themecontext.Provider value ={{isDarkmode,toggledarkmode}}>
       {children}
   </Themecontext.Provider>
  )
}

export default ThemecontextProvider