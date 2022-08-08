import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {useSearchParams} from "react-router-dom"
const Filter = () => {
  // DO NOT CHANGE THE ORDER of the category filters: ie. Analog, Digital, Chronograph in the UI

  const [searchParams,setsearchparams]= useSearchParams()
  const initcat = searchParams.getAll("cat")

  const [category,setcategory] = useState(initcat||[])

const handlecat =(e)=>{
  const option = e.target.value;
  const newcat = [...category]
  if(category.includes(option)){
    newcat.splice(newcat.indexOf(Option),1)
  }else{
    newcat.push(option)
  }
  setcategory(newcat)
}

useEffect(()=>{
  if(category ){
    const params = {}
    category && (params.cat=category)
    setsearchparams(params)
  }
 
},[category,setsearchparams])
  return (
    <div>
      <h3>Filters</h3>
      <div>Category</div>
      <div data-testid="filter-category">
        <div>
          <input type="checkbox" value="Analog" onChange ={handlecat}/>
          <label>Analog</label>
        </div>
        <div>
          <input type="checkbox" value="Digital" onChange ={handlecat}/>
          <label>Digital</label>
        </div>
        <div>
          <input type="checkbox" value="Chronograph" onChange ={handlecat} />
          <label>Chronograph</label>
        </div>
      </div>
    </div>
  );
};

export default Filter;
