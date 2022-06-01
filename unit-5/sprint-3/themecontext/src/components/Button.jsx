import React from 'react'
import { useContext } from 'react'
import { Themecontext } from '../context/Themecontext'

const Button = ({children}) => {

    const {
        theme,
        thememodes:{dark,light}
    }  = useContext(Themecontext)
    return <button style={theme ?{...dark}:{...light}}>
        {children}
    </button>
  
}

export default Button