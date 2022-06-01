import React from 'react'
import { useContext } from 'react'
import { Themecontext } from '../context/Themecontext'

const Footer = () => {

    const {
        theme,
        thememodes:{dark,light}
    }  = useContext(Themecontext)
    return <footer style={theme ?{...dark}:{...light}}>
       <p>siva is good boy</p>
       <p>siva is best</p>
    </footer>
 
  
}

export default Footer