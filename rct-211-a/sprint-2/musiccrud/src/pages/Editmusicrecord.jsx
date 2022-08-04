import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Navigate, useNavigate,useLocation, useParams } from 'react-router-dom'
import {useSelector,useDispatch} from "react-redux"
import { getmusicrec, updatemusicrec } from '../redux/Appreducer/action';



const Editmusicrecord = () => {

  const [musicname,setmusicname] = useState("")
  const [artistname,setartistname] = useState("")
const dispatch = useDispatch()
const navigate = useNavigate()
const location = useLocation()
const comingfrom = location.state?.from?.pathname || "/"
const handlesubmit=(e)=>{
  e.preventDefault()
   if(musicname && artistname){
    const payload ={
      name:musicname,
      artist:artistname
    }
    dispatch(updatemusicrec(id,payload)).then(()=>{
      dispatch(getmusicrec())
    }).then(()=>{
      navigate(comingfrom,{replace:true})
    })
   }
}



  const {id} = useParams();
const musicrec = useSelector((store)=>store.Appreducer.musicrec)
useEffect(()=>{
  if(id){
    const currentmusic = musicrec.find((album)=>album.id ===id)
    if(currentmusic){
 setartistname(currentmusic.name)
 setmusicname(currentmusic.artist)

    }
  }
},[id,musicrec])
console.log(musicname,artistname)
  return (
    <div>Editmusicrecord
      <form onSubmit={handlesubmit}>
<div>
<label>edit name</label>
<input value ={musicname} onChange={(e)=>setmusicname(e.target.value)} />

</div>
<div>
<label>edit artist</label>
<input value ={artistname}
onChange ={(e)=>setartistname(e.target.value)}
/>

</div>
<button type ="submit">update</button>
</form>

    </div>
  )
}

export default Editmusicrecord