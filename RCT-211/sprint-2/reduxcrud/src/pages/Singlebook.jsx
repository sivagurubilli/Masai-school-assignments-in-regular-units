import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBooks } from '../redux/Appreducer/action'

const Singlebook = () => {

  const {id} = useParams()
  const books = useSelector(state => state.books)
  const [currentbook,setcurrentbook] = useState({})
  const dispatch = useDispatch()
 useEffect(()=>{
  if(books.length === 0){
    dispatch(getBooks())
  }
 },[books.length,dispatch])

  useEffect (()=>{
    if(id){
      const temp = books.find((book)=>book.id === Number(id))
      temp && setcurrentbook(temp)
    }
  },[books,id])

  return (
    <div>
      
      Singlebook
     <h2> {currentbook.bookname}</h2>
     <h2> {currentbook.releaseyear}</h2>
     <h2> {currentbook.category}</h2>

      
      </div>
  )
}

export default Singlebook