import React from 'react'
import { useState } from 'react'
import Button from './Button'
import Header from './Header'

const Counter = () => {
    const [count,setCount] = useState(0)

    const handleClick =(value:number)=>{
 setCount(count+value)
    }
  return (
<>


<Header>
    <div>children siva</div>
    <div>children siva111</div>
</Header>

<Header label= {`${count}`} />

<Button label = "Add"  handleClick={()=>handleClick(1)}/>
<Button  label = "decr"    handleClick={()=>handleClick(-1)}/>


   </>
  )
}

export default Counter