import { useState,useEffect} from "react"
import axios from "axios"

import Employee from "./Employ"

const RegisterForm =()=>{

const [employee,setemployee] = useState({
    name:"",
    age:"",
    role:"",
    address:"",
    salary:"",

    ismarry:false

})
const[employees,setemployees] = useState([])


const handlech =(e)=>{
  const {type,id,checked,value} = e.target
if(type==="checkbox"){
    setemployee({...employee,[id]:checked})
}else{


setemployee({...employee,[id]:value})
}



}




useEffect(()=>{
    const gete =async()=>{
  const d =  await axios.get("http://localhost:8080/employees")
  setemployees(d.data)
    }
     gete()
    
  },[])

const handleSubmit =()=>{
    event.preventDefault()
    axios.post("http://localhost:8080/employees",employee).then(r=>
    setemployees([...employees,r.data])
    //console.log(r.data)
    
    )
    
    
}


return(
    <>


    <form onSubmit={handleSubmit}>
     <label >your name:</label>
<input 
type="text"
id='name'
palceholder="enter name"
value={employee.name}
onChange ={handlech}
/>

<label >your age:</label>
<input 
type="text"
id='age'
palceholder="enter age"
value={employee.age}
onChange ={handlech}
/>

<label >your address:</label>
<textarea
rows={4}
cols={20}
id='address'
palceholder="enter address"
value={employee.address}
onChange ={handlech}
/>

<label>your role</label>
<select id ='role' onChange={handlech}>
<option value='none'>selelct department</option>
<option value ='developer'>Developer</option>

<option value= 'product manager'>product manger</option>


</select>



<label >your salary:</label>
<input 
type="number"
id='salary'
palceholder="your salary"
value={employee.salary}
onChange ={handlech}
/>

<div className="check">
    <label>is married</label>
    <input 
    id='ismarry'
    className="box"
    type='checkbox'
   checked={employee.ismarry}
    onChange={handlech}
    
    />
</div>

<button>save employees details</button>


    </form>

{employees.map((e)=>(
    //<h1>{e.name}</h1>
<Employee details ={e} />
))}
    </>
)

}


export default RegisterForm