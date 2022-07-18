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

import React from "react";
import { useEffect } from "react";
import { getcountry } from "../Redux/action";
import {useDispatch,useSelector} from "react-redux"

import { deletecountry } from "../Redux/action";
import { editcountry } from "../Redux/action";

const Homepage = () => {
const dispatch = useDispatch()

const countries = useSelector(state =>state.countryreducer.countries)

  useEffect(()=>{
   
      dispatch(getcountry())
    
  
  },[dispatch])

  const editcont=(id)=>{
   dispatch(editcountry(id))
   
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
        <RadioGroup>
          <Stack direction="row">
            <Radio data-cy="asc" value="asc">
              Ascending
            </Radio>
            <Radio data-cy="desc" value="desc">
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
 <Button onClick={()=>editcont(c.id)}>
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
