import '../App.css';
import React, { useState } from 'react';


import { Link } from 'react-router-dom';
import { Button, Text, Stack, Input, Center, Box } from '@chakra-ui/react';

function IngredientAdd({ special, handleAddIngredient }) {

  const [name, setName] = useState('')

  function handleName(e) {
    e.preventDefault();
    let newName = e.target.value
    setName(newName)
  }

  function handleAddition(e) {
    e.preventDefault();
    let newIngr = {name: name, recipe_id: special.id}
    fetch("http://localhost:9292/ingredients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(newIngr),
    })
      .then((r) => r.json())
      .then((newItem) => handleAddIngredient(newItem));
  }

  return (
    <Center width='100%' bg='#dbefdc'>
      <Stack spacing={3} bg='white' padding='20px' borderRadius='10px' >
        <Text fontSize='20px' fontWeight='bold'>Add an Ingredient To:</Text>
        <Text fontSize='20px' fontWeight='bold'>{special.name}</Text>
        <Text fontSize='20px' fontWeight='bold'>Name: </Text>
        <Input defaultValue={name} onChange={handleName}/>
      <br/>
      <Box>
      <Button
      onClick={handleAddition}
        _hover={{background: "white", color: "teal.500",}} 
        fontSize='20px' 
        padding='5px'>
      Add</Button>
        <Button 
        _hover={{background: "white", color: "teal.500",}} 
        fontSize='20px' 
        padding='5px'
        ><Link to={`/recipes/${special.id}`}>Cancel</Link></Button>
        </Box>
        </Stack>
      </Center>
  );
}

export default IngredientAdd;