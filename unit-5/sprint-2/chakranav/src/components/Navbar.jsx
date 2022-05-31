import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'


import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'


import React from 'react'
const Navbar = () => {
  return (
    <div>


  
        <div style={{height:"70px",width:"100%",border:"1px solid green",marginTop:'10px'}}>
        
                   
            <Flex>
             
                
            <Button style={{marginLeft:"30px",height:"60px",width:"120px"}} colorScheme='teal' variant='ghost'>
    Logo
  </Button>

 
  
                
                <h2 style={{marginLeft:"30px"}}>inspiration</h2>
                <h2 style={{marginLeft:"30px"}}>Learn design</h2>
                <h2 style={{marginLeft:"30px"}}>Hire designers</h2>
               
                <div style={{marginLeft:"400px"}}>

    <Flex>
        <h2>Sign in</h2>
        <Button colorScheme='blue'>Button</Button>

    </Flex>
</div>
            </Flex>

        </div>
    </div>
  )
}

export default Navbar