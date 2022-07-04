
import styled from "styled-components"
import React from 'react'
const Searchbar = () => {
  return (
    <div>Searchbar
   <Searchbarwrapper>

    <image src="imgse" />
    <Input />
   </Searchbarwrapper>
       

    </div>
  )
}

export default Searchbar



.Searchbarwrapper= styled.div`
border:1px solid black;
display:flex;
border-radius:20px;
padding:5px 10px;
align-items:center;

`
 
const image = styled.img`

height:20px;
padding-right:20px;`


