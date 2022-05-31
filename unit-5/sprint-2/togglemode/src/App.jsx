import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import LeftSection from './components/LeftSection'
import Rightsection from './components/Rightsection'
import styled from 'styled-components'

const App =() =>{

  return (
   
      <Main>
     
      <LeftSection />
      <spn>  <Rightsection /></spn>
     
      </Main>
   
  )
};

export default App;

const Main = styled.div`
 dispaly:flex;
 border:1px solid red`;
