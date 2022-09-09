
import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from "axios"
const Home = () => {


    useEffect(()=>{
        getallpup()
    },[])

    const getallpup=()=>{
     var data= axios.get("https://dog.ceo/api/breeds/list/all")
     console.log(data)
    }
  return (
    <div>
        <Navbar />
        



    </div>
  )
}

export default Home