
import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Booklist from '../components/Booklist'
import Filtersort from '../components/Filtersort'
import { getBooks } from '../redux/action'
import styled from "styled-components"
import { useSearchParams } from 'react-router-dom'


const Books = () => {
  const [searchParams] = useSearchParams()
const dispatch  = useDispatch()
    const books = useSelector(state=>state.books)
  useEffect(()=>{
    const urlCategory = searchParams.getAll("category");
    const urlSort = searchParams.get("sortBy")

    if(books.length===0 && (!urlCategory || !urlSort)  ){

    
    dispatch(getBooks())
}
  },[])

console.log(books)

  return (
    <div>
        <h2>Books</h2>
        <BookPageWrapper>      
            <FilterSortWrapper>
            <Filtersort />

            </FilterSortWrapper>
             <BookListWrapper>
        <Booklist  books ={books}/>
        </BookListWrapper>
        </BookPageWrapper>

        </div>
  )
}

export default Books



const BookPageWrapper = styled.div`
display:flex;
`;

const FilterSortWrapper = styled.div`
 width:300px;
 border:1px solid red;

`;
const BookListWrapper = styled.div`
width:90%;
border:1px solid black;
display:grid;
grid-template-columns:repeat(auto-fit,minmax(300px,max-content))
grid-gap:16px;
justify-content:center;
padding:initial`;