import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSearchParams,useLocation, Link } from 'react-router-dom'
import styled from 'styled-components'
import { getmusicrec } from '../redux/Appreducer/action'
const Musicrecords = () => {

const dispatch = useDispatch()



const musicrec1 = useSelector((store)=>store.Appreducer.musicrec)
   
const [searchParams] = useSearchParams();
const location = useLocation();
useEffect(()=>{
      if(location || musicrec1.length === 0){ 
        const sortby = searchParams.get("sortby")
        let queryParams ={
            params: {
                genre: searchParams.getAll("genre"),
          _sort:sortby && "year",
          _order:sortby,
              },
        };
        dispatch(getmusicrec(queryParams));
      }
    },[location.search]);
  

  return (


    <div>
        
      <MusicrecordsWrapper>
        


        {musicrec1.length>0 && musicrec1.map(album=>{
            return <div key ={album.id}>
                <Link to ={`/music/${album.id}`} >
                
                <div>{album.name}</div>
                
                <div>{album.artist}</div>
                <div><img src ={album.img}/></div>

          <div>{album.genre}</div>
            <div>{album.year}</div> </Link>
            </div>
        })}
       </MusicrecordsWrapper>
    </div>

  )
}

export default Musicrecords



const MusicrecordsWrapper = styled.div`

width:300px;






`