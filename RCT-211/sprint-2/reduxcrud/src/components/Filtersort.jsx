import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {useDispatch} from "react-redux"






const Filtersort = () => {

const dispatch = useDispatch()
const [searchParams,setsearchParams] = useSearchParams()
 const urlCategory = searchParams.getAll("category")
 const urlSort = searchParams.get("sortBy")
 const [category,setcategory] = useState(urlCategory || [])
 const [sortBy,setsortBy] = useState(urlSort || "")

const handleSort =(e)=>{
setsortBy(e.target.value)
}

const handleCheckbox =(e)=>{

    const option = e.target.value;
    let newCategory =[...category]

    if(category.includes(option)){
        newCategory.splice(newCategory.indexOf(option),1)
    }else{
        newCategory.push(option)
    }

    setcategory(newCategory)
 }

 useEffect(()=>{
    if(category || sortBy){
        let params ={}
        category && (params.category = category);
        sortBy && (params.sortBy  = sortBy)
        setsearchParams(params)
    }
 },[category,dispatch,searchParams,sortBy])


 {/*useEffect(()=>{
    if(sortBy){
        const params ={
            category : searchParams.getAll("category"),
            sortBy,
        }

setsearchParams(params)
    }
 },[searchParams,dispatch,setsearchParams,sortBy])


*/}


  return (
    <div>
        
        <h2> Filters</h2>
        <div>
            <div>
                <input type ="checkbox"
                onChange={handleCheckbox}
                value ="novel"
                defaultChecked={category.includes("novel")}
                />
                <label>Novel</label>
            </div>

            <div >
                <input type ="checkbox"
                onChange={handleCheckbox}
                value ="fiction"
                defaultChecked={category.includes("fiction")}
                />
                <label>fiction</label>
            </div>

            <div>
                <input type ="checkbox"
                onChange={handleCheckbox}
                value ="motivation"
                defaultChecked={category.includes("motivation")}
                />
                <label>motivation</label>
            </div>
        </div>
    <h3>sort</h3>
    <div onChange={handleSort}>

        <input type="radio"  value ="asc"  name ={sortBy}
        defaultChecked ={sortBy==="asc"} />Ascending {"  "}
        <input type="radio"  value ="desc"  name ={sortBy}
        defaultChecked ={sortBy==="desc"} />Descending

    
    
    </div>

    </div>
  )
}

export default Filtersort