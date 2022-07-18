import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getBooks } from '../redux/Appreducer/action'
import { Link } from 'react-router-dom'

const Singlebook = () => {

  const {id} = useParams()
  const books = useSelector(state => state.Appreducer.books)
  const [currentbook,setcurrentbook] = useState({})
  const dispatch = useDispatch()
 useEffect(()=>{
  if(books?.length === 0){
    dispatch(getBooks())
  }
 },[books?.length,dispatch])

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
 <button><Link to={`/books/${currentbook.id}/edit`}>edit</Link></button>
      
      </div>
  )
}

export default Singlebook