
export const Pagination = ({ total, selected, onPageChange }) => {

  var tot1 =[]

for(var i=0;i<total;i++){
  tot1.push(i)
}



  return (
  <div className="pageContainer">
    
     {tot1.map((e)=>(
    <div style={{height:"30px",width:"30px" ,border:"1px solid grey"}}>

    {e}
    </div>
     ))
     }


  </div>
  );



};





