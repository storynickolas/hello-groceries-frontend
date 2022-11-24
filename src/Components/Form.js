import '../App.css';
import React, { useState } from 'react';
import { Box, Center, Text, Button, Input, RadioGroup, Radio, HStack, Stack} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Form({ addItem }) {

  const [protein, setProtein] = useState('')
  const [newName, setNewName] = useState('')
  const [newCook, setNewCook] = useState('')
  const [newWeb, setNewWeb] = useState('')
  const [hfimage, setHfimage] = useState('')

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


  function handleSelect(e) {
    e.preventDefault();
    let newState = e.target.value
    setProtein(newState)
  }

  function handleImage(e) {
    e.preventDefault();
    let newState = e.target.value
    setHfimage(newState)
  }

  function handlePost(e) {
    e.preventDefault();
    const itemData = {
      'name': newName,
      'image': hfimage,
      'protein': protein,
      'cook_time': newCook,
      'instructions': newWeb,
    };
    fetch("http://localhost:9292/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((newItem) => addItem(newItem));
  }

  return (
    <Center width='100%' bg='#dbefdc'>
      <Stack spacing={3} bg='white' padding='20px' borderRadius='10px' >
        <Text fontSize='20px' fontWeight='bold'>Add a Recipe</Text>
        <Text fontSize='20px' fontWeight='bold'>Protein: </Text>
        <RadioGroup defaultValue='Itachi'>
          <HStack onChange={handleSelect} spacing='24px'>
            <Radio value="Veggie">Veggie</Radio>
            <Radio value="Chicken">Chicken</Radio>
            <Radio value="Turkey">Turkey</Radio>
            <Radio value='Beef'>Ground Beef</Radio>
          </HStack>
        </RadioGroup>
        <br/>
        <Text fontSize='20px' fontWeight='bold'>Name: </Text>
        <Input onChange={handleName}/>
        <Text fontSize='20px' fontWeight='bold'>Image URL: </Text>
        <Input onChange={handleImage}/>
        <Text fontSize='20px' fontWeight='bold'>Cook Time: </Text>
        <Input onChange={handleCook}/>
        <Text fontSize='20px' fontWeight='bold'>Recipe URL: </Text>
        <Input onChange={handleWeb}/>
        <br />
        <Box>
          <Button
            _hover={{background: "white", color: "teal.500",}} 
            fontSize='20px' 
            padding='5px'>
          <Link to={`/recipes/${1}`}>Cancel</Link>
          </Button>
          <Button 
            _hover={{background: "white", color: "teal.500",}} 
            fontSize='20px' 
            padding='5px'
            onClick={handlePost}><Link to={`/recipes/${1}`}>Save</Link>
          </Button>
          </Box>
        </Stack>
    </Center>
  );
}

export default Form;