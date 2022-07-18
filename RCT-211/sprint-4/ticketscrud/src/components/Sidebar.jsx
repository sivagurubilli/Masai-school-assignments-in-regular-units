

import { Box, Button, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Flex } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useSearchParams } from 'react-router-dom'
import { useState } from 'react'

const Sidebar = () => {

  const isAuth = useSelector(state=>state.Authreducer.isAuth)
   const tasks = useSelector((state)=>state.Appreducer.tasks);
   const personaltasks = tasks.filter((item)=>item.tags.includes("personal"))
   const officialtaks = tasks.filter((item)=>item.tags.includes("official"))
   const othertasks = tasks.filter((item)=>item.tags.includes("others"))
const [selectedtags,setselectedtags] = useState([])
const [searchparams,setsearchparams]= useSearchParams() 



       const handletagchange =(tag)=>{
  let newselectedtags =[...selectedtags]

  if(selectedtags.includes(tag)){
    newselectedtags.splice(newselectedtags.indexOf(tag),1)
  }else{
    newselectedtags.push(tag)
  }
  setselectedtags(newselectedtags)
       }




useEffect(()=>{
  if(selectedtags){
    setsearchparams({tags:selectedtags})
  }
},[selectedtags,setsearchparams])
  return (
    <div>

      <Box border="1px solid red" width="250px"
      height="100vh"
      >

        <Stack direction="column">
          <Box height="15vh" border="1px solid red">

          </Box>
        <Flex direction="column" gap="5px" margin="5px">
        <Box border="1px solid blue" padding="5px 0"
        onClick={()=>handletagchange("all")}
        >
                 
    <Flex padding ="0 10px">

              <Text>All</Text>
                  <Text marginLeft={"auto"}>{tasks.length}</Text>
            </Flex>
            </Box>

        </Flex>
        <Flex  direction="column">
        <Box border="1px solid blue"
         onClick={()=>handletagchange("personal")}>        
    <Flex padding ="0 10px">
   

              <Text>personal</Text>
                  <Text marginLeft={"auto"}>{personaltasks
                  .length}</Text>
            </Flex>
            </Box>

        </Flex>
        <Flex  direction="column">
        <Box border="1px solid blue"
            onClick={()=>handletagchange("official")}
            >        
    <Flex padding ="0 10px">

              <Text>official</Text>
                  <Text marginLeft={"auto"}>{officialtaks.length}</Text>
            </Flex>
            </Box>

        </Flex>
        
          <Box height="70vh" border="1px solid blue">
<Box border="1px solid blue"
    onClick={()=>handletagchange("others")}
    >        
    <Flex padding ="0 10px">

              <Text>others</Text>
                  <Text marginLeft={"auto"}>{othertasks.length}</Text>
            </Flex>
            </Box>


</Box>
          <Box height="10vh" border="1px solid red">
<Button width="100%">{isAuth && "LOGOUT"}</Button>
          </Box>
        </Stack>

      </Box>




    </div>
  )
}

export default Sidebar