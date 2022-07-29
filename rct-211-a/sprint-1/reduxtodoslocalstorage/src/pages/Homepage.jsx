import React from 'react'
import Todos from '../components/Todos'
import {useSelector} from "react-redux"
import Login from './Login'

const Homepage = () => {
  const isAuth = useSelector((store)=>store.Authreducer.isAuth)
console.log(isAuth)
  return (
    <div>
      <Login/>

       {isAuth===true ? <Todos />:""}
    </div>
  )
}

export default Homepage