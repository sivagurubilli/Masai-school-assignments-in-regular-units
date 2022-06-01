

import React from 'react'
import { useContext } from 'react'
import { Themecontext } from '../context/Themecontext';
import Button from "./Button"

const Form = () => {

    const {
        theme,
        thememodes:{dark,light}
    }  = useContext(Themecontext)
    return <form style={theme ?{...dark}:{...light}}>
 <input type ="text" placeholder ="email" />
<input type="text" placeholder='password' />
<Button>login</Button>


    </form>
 
}

export default Form