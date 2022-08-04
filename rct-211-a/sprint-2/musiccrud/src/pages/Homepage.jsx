import React from 'react'
import Filtersort from '../components/Filtersort'
import Musicrecords from './Musicrecords'
import styled from 'styled-components'
const Homepage = () => {
  return (
    <div>Homepage
        <HomepageWrapper>
<FiltersortWrapper>
<Filtersort />

</FiltersortWrapper>
       <MusicrecordsWrapper1>
       <Musicrecords />


       </MusicrecordsWrapper1>

        </HomepageWrapper>



    </div>
  )
}

export default Homepage

const HomepageWrapper = styled.div`
display:flex;


`




const FiltersortWrapper = styled.div`
width:350px;
border:1px solid red;


`



const MusicrecordsWrapper1 = styled.div`
width:1000px;
border:1px solid green;
display: grid;
  grid: auto auto auto auto;
`