import { Box, Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react'
import React from 'react'
import { Badge } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
const Taskcard = ({
    title,
    description,
    tags,
    subtasks,
    colorScheme="green"
}) => {

const [checkbox,setcheckbox] = useState(()=>{
    let data = subtasks.filter((item)=>{
        return item.status && item.subtasktitle;
    }).map((item)=>item.subtasktitle)
    return data
}

)
console.log(checkbox)

  return (
    <div>

<Box width={"230px"}
border="1px solid red"
padding="10px"
marginLeft="10px"
>
    <Flex justifyContent={"space-between"}>
  <Text>
        {title}
    </Text>
    <EditIcon />
    </Flex>
    <Box>
        <Stack>
            {tags.length && tags.map((item,index)=>{
                return (
                 <Badge key ={index} colorScheme={colorScheme}>
                    {item}
                 </Badge>   
                )
            })}
        </Stack>
    </Box>
    <Text>{description}</Text>
    
<Box>

    <CheckboxGroup value={checkbox}>
        {subtasks.length && subtasks.map((item,index)=>
            (
            <Checkbox key ={index} 
            value ={item.subtasktitle}
            size="md">{item.subtasktitle}</Checkbox>
        ))}
    </CheckboxGroup>
</Box>





</Box>
    </div>
  )
}

export default Taskcard