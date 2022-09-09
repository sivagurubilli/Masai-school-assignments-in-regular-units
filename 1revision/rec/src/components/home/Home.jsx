
import React, { useEffect,useState } from 'react'
import Navbar from '../Navbar/Navbar'
import axios from "axios"
import styles from "./home.module.css"
import {Link} from "react-router-dom"

const Home = () => {
const [puppy,setpuppy] = useState({})
const [data,setdata] = useState([])
    useEffect(()=>{
        getallpup()
    },[data])

    const getallpup=()=>{
     axios.get("https://dog.ceo/api/breeds/list/all").then((res)=>{
setpuppy(res.data.message)
       

    var daat =[]

    for(var k in puppy){
        daat.push(k)
    }

  setdata(daat)
    })
    }


     
    


  return (
    <div>
        <Navbar />
        

       {data.map((e,id)=>(
        <div className={styles.puppy}>
            <Link to={`/puppy/${e}`}><h3>{e}</h3></Link>
            
            </div>
       ))}



    </div>
  )
}

export default Home