import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Puppy = () => {


    const {name} = useParams()

    useEffect(()=>{
        fetch("https://dog.ceo/api/breed/{name}/images").then((res)=>{
  console.log(res.json)
        })
    })
  return (
    <div>puppy</div>
  )
}

export default Puppy