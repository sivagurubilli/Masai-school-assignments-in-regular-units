import React ,{useState} from 'react'


const Counter = () => {
    const [count,setcount] = useState(0)
  const handleadd =((e)=>{
  setcount(count+e)
  })

  const handlesub =((e)=>{
    setcount(count-e)
    })
   
  return (
    <>
    <h3 data-testid="header">counter</h3>
    <div>
    <button  onClick ={()=>handleadd(+5)} data-testid ="addbut">add</button>
     <h3 data-testid ="count">{count}</h3>
      <button onClick={()=>handlesub(5)} data-testid ="decbut">dec</button>

    </div>
    </>
  )
}

export default Counter