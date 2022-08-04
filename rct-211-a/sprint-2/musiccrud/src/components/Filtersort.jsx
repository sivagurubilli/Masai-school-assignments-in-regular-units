import React,{useEffect, useState} from 'react'
import { useSearchParams } from 'react-router-dom'

const Filtersort = () => {


const [searchparams,setsearchparams]=useSearchParams()

const initialgenreParams = searchparams.getAll("genre")
const initsortparams = searchparams.get("sortby")
const [category,setcategory]= useState(initialgenreParams||[])
const [sortby,setsortby] = useState(initsortparams||"")
const handlegenrechange =(e)=>{
const option =  e.target.value;
const newcategory = [...category]

if(category.includes(option)){
newcategory.splice(newcategory.indexOf(option),1)
}else{
  newcategory.push(option)
}
setcategory(newcategory)
}


const handlesortby =(e)=>{
    setsortby(e.target.value)
}



useEffect(()=>{
if(category || sortby){
   const params = {};
   category && (params.genre=category);
   sortby && (params.sortby= sortby);
   setsearchparams(params) 
   
}
},[category,setsearchparams,sortby])

  return (
    <div>
        <h3>filter</h3>
        <div>
            <input 
            value ="K-Pop"
            defaultChecked={category.includes("K-Pop")}
            type="checkbox" onChange={handlegenrechange} />
            <label >K-Pop</label>
        </div>
        <div>
            <input 
    defaultChecked={category.includes("Country")}

            value ="Country" type="checkbox" onChange={handlegenrechange} />
            <label >Country</label>
        </div>
        <div>
            <input 
            value="Pop"
            defaultChecked={category.includes("Pop")}

            type="checkbox" onChange={handlegenrechange} />
            <label >pop</label>
        </div>
        <div>
            <input 
            value="Hard Rock"
            defaultChecked={category.includes("Hard Rock")}

            type="checkbox" onChange={handlegenrechange} />
            <label >Hard Rock</label>
        </div>
        <div>
            <input 
            value ="Holiday"
            defaultChecked={category.includes("Holiday")}

            type="checkbox" onChange={handlegenrechange} />
            <label >Holiday</label>
        </div>

            
        <div>
            <input 
            value ="Heavy Metal"
            defaultChecked={category.includes("Heavy Metal")}

            type="checkbox"  onChange={handlegenrechange} />
            <label >Heavy Metal</label>
        </div>
<h3>Sort</h3>
<div onChange={handlesortby}>
    <div>
        <input type ="radio" name ="sortby"  
         value ="asc"
       
       defaultChecked ={sortby==="asc"}
      />
        <label>Ascending</label>
    </div>
    <div>
        <input type ="radio"  value ="desc" 
         name ="sortby" 
        defaultChecked ={sortby==="desc"}
       />
        <label>Descending</label>
    </div>
</div>
    </div>
  )
}

export default Filtersort