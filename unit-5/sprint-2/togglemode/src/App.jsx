import { useState } from 'react'
import './App.css'
import LeftSection from './components/LeftSection'
import Rightsection from './components/Rightsection'
import styled from 'styled-components'

const App =() =>{

  return (
   
      <Main>
     <div style={{display:"flex"}}>

    
      <LeftSection />
      <Rightsection />

</div>
      </Main>
   
  )
};

export default App;

const Main = styled.div`
 dispaly:flex;
 flex-direction:row;
 border:1px solid red`;
