import React from 'react'
import { useContext } from 'react'
import {Themecontext} from "../conteext/Themecontext"
import styled from 'styled-components'


const UserDetail = ({user}) => {

    const {isDarkmode} = useContext(Themecontext);


  return (
    <div>
        <Card style ={{color: isDarkmode ? 'white' : 'black'}}>
    <CardLeft>

        <img src = {user.avatar} alt ={user.first_name} />
    </CardLeft>

<CardRight >



   <h3>

        <strong> First Name:</strong>
        {user.first_name}
        </h3>

    <h3>
        <strong>Last Name:</strong>
        {user.last_name}


    </h3>
    <h3>

        <strong>Email: </strong>
        {user.email}
    </h3>
</CardRight>

        </Card>



    </div>
  );
};

export default UserDetail;



const Card = styled.div`
width:90%;
padding:1.3rem;
display: flex;`

const CardLeft = styled.div`
width:20%;
padding:0.4rem;
display;flex;
& img {
    border-radius:50%;
    margin:0 0 0 1rem;
    width : 70%;
}`

const CardRight = styled.div`
width:70%;padding:0.4rem;
display:flex;
flex-direction:column;

`