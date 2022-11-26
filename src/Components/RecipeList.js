import '../App.css';
import React from 'react';
import { List, ListItem, Wrap, Center, Text, Button } from '@chakra-ui/react'
import {Link} from 'react-router-dom';

function RecipeList({ options, handleClick }) {

  return (
    <List bg='white' borderRadius='10px'>
      <Center width='100%'>
      <Text fontSize='30px' fontWeight='bold'>Recipe List</Text>
      </Center>
      {
      options.map((item) => 
      <Wrap key={item.name}>
      <ListItem padding='5px'>
        <Button 
          onClick={() => handleClick(item)} 
          _hover={{background: "white", color: "teal.500",}}
          fontSize={['sm', 'md', 'lg']}
        >
          <Link 
            to={`/recipes/${item.id}`} 
            underline="none"
            color='#459c48' 
            >{`${item.name} (${item.cook_time} Min)`}
          </Link>
        </Button>
      </ListItem>
      </Wrap>
      )}
    </List>
  );
}

export default RecipeList;

