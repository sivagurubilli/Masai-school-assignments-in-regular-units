import React from 'react'
import {useContext} from "react"
import {Themecontext} from '../conteext/Themecontext'
import UserList from './UserList'
import styled from 'styled-components'

const Rightsection = () => {


    const {isDarkmode,toggledarkmode} = useContext(Themecontext)

  return (
    <div>
        <Rightmain  style={{backgroundColor:isDarkmode ?  "#1e1e1e": "#ececec"}}>

            <Top>
                <h1 style={{color:isDarkmode?'white':'black'}}>Users list</h1>

                <button style={{border:"none",padding:"0.3rem 0.7rem",
            cursor:"pointer",backgroundColor:isDarkmode ?"white" : 'black',
            color : isDarkmode ? 'black':'white'
            
            }}  onClick={()=>{
                toggledarkmode()
            }}>  {isDarkmode ? 'light' :"dark"}</button>
            </Top>


<UserList />
        </Rightmain>


    </div>
  )
};

export default Rightsection;


const Rightmain = styled.div`
width:40% ;`;


const Top = styled.div`
margin:2% 0 0 3%;
width:40%;
dispaly:flex;
align-items:center;
justify-content:space-between;`