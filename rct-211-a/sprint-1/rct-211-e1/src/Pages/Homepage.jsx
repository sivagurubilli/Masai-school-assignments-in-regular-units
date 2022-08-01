import React from "react";
import { useEffect } from "react";
import {useDispatch , useSelector} from "react-redux"
import ProfileDataRow from "../Components/ProfileDataRow";
import { getprofilereq, getprofilesucc, getprofilrfailure } from "../Redux/action";

const Homepage = () => {

  const dispatch = useDispatch()
  
 var da = useSelector((store)=>store.profileData)


   useEffect(()=>{
 getdata()
   },[])

   const getdata=()=>{
       dispatch(getprofilereq())
       axios.get("http://localhost:8080/profile").then((r)=>{
        console.log(r.data)
        return dispatch(getprofilesucc(r.data))
       }).catch((e)=>{
        dispatch(getprofilrfailure(e))
       })
   }


  return (
    <div>
      <table>
        <thead style={{ fontWeight: "700" }}>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody data-cy="profile-wrapper">
          {da.length>0 && da.map((e)=>(
            <ProfileDataRow profile ={e}/>
          ))}
          {/* Map through the profileData received from the json-server on mounting the component to show it in a table format */}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
