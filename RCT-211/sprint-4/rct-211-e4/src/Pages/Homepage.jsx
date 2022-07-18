import {
  Box,
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Text,
  Th,
  Button,
  Thead,
Td,
  Tr,
} from "@chakra-ui/react";
import {Link} from "react-router-dom"

import React from "react";
import { useEffect } from "react";
import { getcountry } from "../Redux/action";
import {useDispatch,useSelector} from "react-redux"
import {useSearchParams} from "react-router-dom"
import { deletecountry } from "../Redux/action";
import { editcountry } from "../Redux/action";
import { useState } from "react";
import {Navigate} from "react-router-dom"

const Homepage = () => {

 
     const dispatch = useDispatch()
     const [searchParams,setsearchParams] =useSearchParams()
     const urlsort = searchParams.get(sortBy)

 const handlesort =(e)=>{
      console.log(e)
      setsortBy(e.target.value)
    }


  const [sortBy,setsortBy] = useState(urlsort||"")
  
const countries = useSelector(state =>state.countryreducer.countries)
  
  useEffect(()=>{
   
      dispatch(getcountry())
    
  
  },[dispatch])

  const editcont=(id)=>{
   <Navigate to ="/country/${id}"/>
   
  }


  const deletecont=(id)=>{
    dispatch(deletecountry(id))
   
  }
  


    return (
    <Box>
      <Flex padding="0 1rem" mb="2rem">
        <Text fontWeight="700" paddingRight="1rem">
          Sort by country population
        </Text>
        <RadioGroup onChange={handlesort}>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc" name ={sortBy =="asc"}>
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc" name ={sortBy == "desc"}>
              Descending
            </Radio>
          </Stack>
        </RadioGroup>
      </Flex>
      <TableContainer>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Country</Th>
              <Th>Capital</Th>
              <Th>Population</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody data-cy="table-body">
            {/* map through the fetched country list, to form table rows */}
            {countries.map((c)=>(
 <Tr key={c.id}>
 <Td>
  {c.country}
 </Td>
<Td>
  {c.city}
</Td>
<Td>
  {c.population}
</Td>
<Td>
  
 <Button onClick={()=>editcont(c.id)} >
  edit
 </Button>

</Td>
<Td>
 <Button onClick={()=>deletecont(c.id)}>
  delete
 </Button>
</Td>
</Tr>
            ))}
          
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Homepage;
