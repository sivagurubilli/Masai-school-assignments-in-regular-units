

import React, { useEffect } from 'react'
import Bookcard from './Bookcard'
import styled from "styled-components"
import { getBooks } from '../redux/Appreducer/action'
import { useDispatch,useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const Booklist = () => {

  const dispatch  = useDispatch()
    const books = useSelector(state=>state.Appreducer.books)
const [searchParams] = useSearchParams()

const location = useLocation()
  useEffect(()=>{
  if(books.length=== 0 || location.search){
const sortBy = searchParams.get("sortBy")
let getTodoParams ={
  params:{
       category :searchParams.getAll("category"),
   _sort: sortBy && "releaseyear",
_order:sortBy,
}
}
    dispatch(getBooks(getTodoParams))
  }
  },[location.search])
  return (
    <div>Booklist

{books.length>0 && books.map((singlebook)=>{
    return (
    <BookCardWrapper key={singlebook.id}>

<Link  to ={`/books/${singlebook.id}`}>
<Bookcard  bookData={singlebook}/> </Link>
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