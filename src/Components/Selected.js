// import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Center, Text, Image, Button, ListItem, List, Wrap } from '@chakra-ui/react';

function Selected({ special, handleDelete }) {

  return (
    <Wrap bg='white' borderRadius='10px'>
      <Center width='100%'>
        <Text fontSize='30px' padding='5px' fontWeight='bold'>{special.name}</Text> 
      </Center>
      <Center width='100%'>
        <Button 
        onClick={() => handleDelete()}
        _hover={{background: "white", color: "teal.500",}} 
        fontSize='20px' 
        padding='5px'>
      Delete</Button>
      <Button 
        _hover={{background: "white", color: "teal.500",}} 
        fontSize='20px' 
        padding='5px'>
      <Link to={`/recipes/${special.id}/edit`}>Edit</Link></Button>
      </Center>
      <Center width='100%'>
      <Image src={special.image} alt={special.name} width='80%'
      /></Center>
      <Center width='100%'>
      <List fontSize='20px'>
        <ListItem>{`Protein: ${special.protein}`}</ListItem> 
        <ListItem>{`Cook Time: ${special.cook_time} Min`}</ListItem> 
        <ListItem>Instructions: <a href={special.instructions}>{special.name}</a></ListItem>
      </List>
      </Center>
    </Wrap>
  );
}

export default Selected;

