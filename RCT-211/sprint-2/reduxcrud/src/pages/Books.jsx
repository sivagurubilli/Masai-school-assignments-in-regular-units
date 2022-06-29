
import React from 'react'
import { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Booklist from '../components/Booklist'
import Filtersort from '../components/Filtersort'
import { getBooks } from '../redux/Appreducer/action'
import styled from "styled-components"
import { useSearchParams } from 'react-router-dom'


const Books = () => {
  
  

  return (
    <div>
        <h2>Books</h2>
        <BookPageWrapper>      
            <FilterSortWrapper>
            <Filtersort />

            </FilterSortWrapper>
             <BookListWrapper>
        <Booklist />
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