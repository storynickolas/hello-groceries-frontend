import '../App.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Center, Stack, Input, Text, Box, Button } from '@chakra-ui/react';

function Edit({ selected, handleSave }) {

  const [protein, setProtein] = useState(selected.protein)
  const [newName, setNewName] = useState(selected.name)
  const [newCook, setNewCook] = useState(selected.cook_time)
  const [newWeb, setNewWeb] = useState(selected.instructions)

  function handleProtein(e) {
    e.preventDefault();
    let newCity = e.target.value
    setProtein(newCity)
  }

  function handleName(e) {
    e.preventDefault();
    let newCity = e.target.value
    setNewName(newCity)
  }

  function handleCook(e) {
    e.preventDefault();
    let newCity = e.target.value
    setNewCook(newCity)
  }

  function handleWeb(e) {
    e.preventDefault();
    let newCity = e.target.value
    setNewWeb(newCity)
  }

  function handleEdit() {
    console.log(selected)
    const itemData = {
      'name': newName,
      'protein': protein,
      'cook_time': newCook,
      'instructions': newWeb
    };
    fetch(`http://localhost:9292/recipes/${selected.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((itemData) => handleSave(itemData));
  }

  return (
    <Center width='100%' bg='#dbefdc'>
      <Stack spacing={3} bg='white' padding='20px' borderRadius='10px' >
        <Text fontSize='20px' fontWeight='bold'>Recipe Edit</Text>

        <Text fontSize='20px' fontWeight='bold'>Name: </Text>
        <Input defaultValue={newName} onChange={handleName}/>
        <Text fontSize='20px' fontWeight='bold'>Protein: </Text>
        <Input defaultValue={protein} onChange={handleProtein}/>
        <Text fontSize='20px' fontWeight='bold'>Cook time: </Text>
      <Input defaultValue={newCook} onChange={handleCook}/>
      <Text fontSize='20px' fontWeight='bold'>Instructions: </Text>
      <Input defaultValue={newWeb} onChange={handleWeb}/>
      <br/>
      <Box>
      <Button
        _hover={{background: "white", color: "teal.500",}} 
        fontSize='20px' 
        padding='5px'>
      <Link to={`/recipes/${selected.id}`}>Cancel</Link></Button>
        <Button 
        _hover={{background: "white", color: "teal.500",}} 
        fontSize='20px' 
        padding='5px'
        onClick={handleEdit}><Link to={`/recipes/${selected.id}`}>Save</Link></Button>
        </Box>
      </Stack>
    </Center>
  );
}

export default Edit;