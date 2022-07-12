import { useState } from "react";
import styled from "styled-components"




export const Pagination = ({ total, selected, onPageChange }) => {

  var tot1 =[]

for(var i=0;i<=total;i++){
  if(i==0){
    tot1.push("prev")
  }
  tot1.push(i)
  if(i==total){
    tot1.push("next")
  }
}



  return (
    <PageWrapper>
  <div className="pageContainer"  style={{display:"flex",}}>
    
     {tot1.map((e)=>(
    
   <PageCell key ={e} e ={e}  selected={selected}/>
     ))
     }


  </div>
  </PageWrapper>
  );



};



export const PageCell=(({e,selected})=>{

  const [color,setcolor] = useState("white")
    
 
    return (
      <div style={{height:"30px",width:"50px" ,border:"1px solid grey",marginLeft:"20px" ,
      justifyContent:'center',backgroundColor:color}}
      
     
      >

   {e}
    </div>
    )
})




const PageWrapper =  styled.div`
   display:flex;
margin-left:300px;
margin-top:200px;
`;
