import React from 'react'
import {useContext} from "react"
import {Themecontext} from "../conteext/Themecontext"
import styled from 'styled-components'

const LeftSection = () => {
    const {isDarkmode,toggledarkmode} = useContext(Themecontext)

  return (
    <div>
        
        <Leftnav style ={{backgroundColor:isDarkmode ? "#000" :"#fff"}}><div className='pic'>

            <img src='https://images.unsplash.com/photo-1653943377896-2970277c4e0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
            alt = "profilr pic" />
        </div>

        </Leftnav>
    </div>
  )
}

export default LeftSection



const Leftnav = styled.div`
width:6%;
border:1px solid red;
height:100vh;
text-align:center;
display:flex;
flex-direction:column;
& .pic> img {
    width:70%;
    border-radius:50%;
}`