
import React from 'react'
var src1 ="https://media.gettyimages.com/photos/stack-of-books-picture-id157482029?k=20&m=157482029&s=612x612&w=0&h=b_0K-1Ut9alhKYu9zlgevSAHDkqSxLF634VDwPw8CHU="
const Bookcard = ({bookData}) => {
  return (
    <div>
        
        <img style={{height:"200px",width:"200px"}} src={src1} alt="" />
   <div> {bookData.bookname}</div>
   <div> {bookData.releaseyear}</div>

   <div> {bookData.category}</div>

    </div>
  )
}

export default Bookcard