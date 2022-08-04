import React,{useState} from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector } from "react-redux"
import { getmusicrec } from '../redux/Appreducer/action'
import {Link} from "react-router-dom"
import {useParams} from "react-router-dom"


const Singlemusicrecord = () => {
 const {id} = useParams()
 const dispatch = useDispatch()
 const musicrec1 = useSelector((store)=>store.Appreducer.musicrec);
 const [currentmusicalbum,setcurrentmusicalbum]= useState({});

 useEffect(()=>{
  if(musicrec1.length===0){
    dispatch(getmusicrec())

  }
 });


 useEffect(()=>{
  if(id){
const currentmusic = musicrec1.find(album=>album.id===(id))
currentmusic && setcurrentmusicalbum(currentmusic)

}
 },[id,musicrec1])
 
 
 console.log(currentmusicalbum)
  return (
    <div>

<h1>{currentmusicalbum.name}</h1>
<h1>{currentmusicalbum.artist}</h1>
<div><img src ={currentmusicalbum.img}/></div>
    <div><Link to ={`/music/${id}/edit`}>Edit</Link></div>

    </div>
  )
}

export default Singlemusicrecord