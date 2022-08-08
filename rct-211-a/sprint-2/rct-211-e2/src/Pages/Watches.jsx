import React from "react";
import { useEffect } from "react";
import Filter from "../Components/Filter";
import { getwatches } from "../Redux/AppReducer/action";
import {useDispatch,useSelector} from "react-redux"
import {Link,useSearchParams,useLocation} from "react-router-dom"
import WatchCard from "../Components/WatchCard";

const Watches = () => {
const watches1 = useSelector((store)=>store.appreducer.watches)
const dispatch = useDispatch()

const [searchParams] = useSearchParams()
const location = useLocation()
  useEffect(()=>{
  if(location|| watches1.length==0){
    let qparams ={
      params :{
        cat : searchParams.getAll("cat")
      }
    }
    dispatch(getwatches(qparams))

  }


  
  },[location.search])

  

  return (
    <div>
      
      <Filter />
      <div>
        {watches1.length >0 && watches1.map((w)=>(

          <div>
            <Link to ={`/watches/${w.id}`}>
<WatchCard key ={w.id} id ={w.id}/>
            </Link>
          </div>
        )

        )}
        {/* Map through the watch list here using WatchCard Component */}
      </div>
    </div>
  );
};

export default Watches;
