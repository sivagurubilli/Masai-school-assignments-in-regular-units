

import React from 'react'
import Bookcard from './Bookcard'
import styled from "styled-components"
const Booklist = ({books}) => {
  return (
    <div>Booklist

{books.length>0 && books.map((singlebook)=>{
    return (
    <BookCardWrapper key={singlebook.id}>
<Bookcard  bookData={singlebook}/>
    </BookCardWrapper>
    )
})}
        
    </div>
  )
}

export default Booklist;



const BookCardWrapper = styled.div`
border:1px solid blue;
width:200px;
padding:5px;

`