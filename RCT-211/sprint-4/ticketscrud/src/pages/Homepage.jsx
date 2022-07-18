import React from 'react'
import { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import Sidebar from '../components/Sidebar'
import { useDispatch } from 'react-redux'
import { useCallback } from 'react'
import {gettasks} from "../redux/appreducer/action"
import Taskcard from '../components/Taskcard'
import { Text } from '@chakra-ui/react'
import { useSelector } from 'react-redux'

const Homepage = () => {
const tasks = useSelector((state)=>state.Appreducer.tasks)
  const dispatch = useDispatch()
const gettaskshandler=useCallback(()=>{
  dispatch(gettasks)
},[dispatch])

useEffect(()=>{
    if(tasks.length ===0){
      gettaskshandler();
    }
  },[gettaskshandler,tasks.length])


  return (
    <div>
<Box>
  <Flex justifyContent="space-around" width="100%">
<Sidebar />
<Box border="1px solid black"
width="250px"  height="95vh"
>
<Box>
  <Text textAlign ="center">
    todo
  </Text>
</Box>
{tasks.length >0 && tasks.filter(item=>item.task_status ==="todo").map((item)=>{
  return <Taskcard key ={item.id} {...item}   colorScheme="green" />
}) }
</Box>
<Box border="1px solid black"
width="250px"  height="95vh"
>
<Box>
  <Text textAlign ="center">
    in-progress
  </Text>
</Box>
{tasks.length >0 && tasks.filter(item=>item.task_status ==="in-progress").map((item)=>{
  return <Taskcard key ={item.id} {...item}   colorScheme="yellow" />
}) }
</Box>
<Box border="1px solid black"
width="250px"  height="95vh"
>

<Box>
  <Text textAlign ="center">
    done
  </Text>
</Box>

{tasks.length >0 && tasks.filter(item=>item.task_status ==="done").map((item)=>{
  return <Taskcard key ={item.id} {...item}   colorScheme="red"/>
}) }
</Box>

</Flex>
</Box>





    </div>
  )
}

export default Homepage