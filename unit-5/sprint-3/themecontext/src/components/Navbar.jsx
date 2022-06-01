import React from 'react'
import { useContext } from 'react'
import { Themecontext } from '../context/Themecontext'

const Navbar = () => {

    const {
        theme,
        toggleTheme,
        thememodes:{dark,light}
    }  = useContext(Themecontext)
    return <nav style={theme ?{...dark}:{...light}}>
       <button  onClick={()=>{
           toggleTheme()
       }}>
{theme ? 'toggle light' : 'toggle dark'}

       </button>
    </nav>
 
}

export default Navbar