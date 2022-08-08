import React from "react";
import { useEffect } from "react";
import Filter from "../Components/Filter";
import { getwatches } from "../Redux/AppReducer/action";
import {useDispatch,useSelector} from "react-redux"
import {Link,useSearchParams,useLocation} from "react-router-dom"
import WatchCard from "../Components/WatchCard";
import styled from "styled-components";

const Watches = () => {
const watches1 = useSelector((store)=>store.appreducer.watches)
const dispatch = useDispatch()

const [searchParams] = useSearchParams()
const location = useLocation()

  useEffect(()=>{
  if(location || watches1.length == 0){
    let qparams ={
      params :{
        cat: searchParams.getAll("cat")
      }
    }
    
    dispatch(getwatches(qparams))

  }


  
  },[location.search])

  

  return (
    <div>
      <WatchWrapper>   
         <Filter />
      <div>
        <WatchesWrapper>
        {watches1.length >0 && watches1.map((w)=>(

          <div key ={w.id}>
            <Link to ={`/watches/${w.id}`}>
<WatchCard  id ={w.id}/>
            </Link>
          </div>
        )

        )}
        </WatchesWrapper>
        {/* Map through the watch list here using WatchCard Component */}
      </div>
      </WatchWrapper>
  
    </div>
  );
};

export default Watches;


const WatchWrapper = styled.div`
display:flex
`

const WatchesWrapper = styled.div`
margin-left:100px;
margin-top:50px;
display:grid
`