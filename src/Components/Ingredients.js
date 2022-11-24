import '../App.css';
import React from 'react';
import { Wrap, List, ListItem, Button, Text, Center, UnorderedList} from '@chakra-ui/react';


import { Link } from 'react-router-dom';

function Ingredients({ special }) {


  return (
    <Wrap bg='white' borderRadius='10px'>
      <Center width='100%'>
    <Text fontSize='30px' padding='5px' fontWeight='bold'>Ingredient List:</Text>
    </Center>
      <Center width='100%'>
        <UnorderedList>
        {special.ingredients ? special.ingredients.map((item) => 
          <ListItem key={item.id + item.name}>
              {item.name}
          </ListItem>): ''}
          </UnorderedList>
          </Center>
          <Center width='100%'>
    <Button  
        _hover={{background: "white", color: "teal.500",}} 
        fontSize='20px' 
        padding='5px'>
      <Link to={`/recipes/${special.id}/add`}>Add Ingredient</Link></Button>
      </Center>
    </Wrap>  
  );
}

export default Ingredients;