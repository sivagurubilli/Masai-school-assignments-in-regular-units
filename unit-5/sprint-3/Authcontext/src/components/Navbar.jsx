import React from 'react'
import { useContext } from 'react'
import {Authcontext } from "../context/Authcontext"

const Navbar = () => {

    const {isauth,toggleauth} = useContext(Authcontext)
  return (
    <div>Navbar

        <nav  style={{
            display:'flex',
            width:'90',
            margin:'auto',
            height:'1rem',
            padding:'flex',
            justifyContent:"flex-end",
            alignItems:"center",
            border:'1px solid red'

    
    }} >  {isauth ? (<button onClick={()=>{
        toggleauth()
    }}>logout</button>)
:(<button>login</button>)}


        </nav>
    </div>
  )
}

export default Navbar


































