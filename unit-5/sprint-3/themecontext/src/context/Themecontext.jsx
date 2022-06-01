import React from 'react'
import { createContext ,useState} from 'react'
import {thememodes} from '../style'

export const Themecontext = createContext();


const ThemecontextProvider = ({children}) => {

    const [theme,settheme] = useState(false)
    const toggleTheme =()=>{
        settheme(!theme)
    }
  return (
   <Themecontext.Provider value={{theme,toggleTheme,thememodes}}>
       {children}
   </Themecontext.Provider>
  )
}

export default ThemecontextProvider