import '../App.css';
import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Wrap } from '@chakra-ui/react';

function Navbar({ handlePage }) {

  const shortest = () => {
    handlePage('/quick')
  }

  const longest = () => {
    handlePage('/by_time')
  }

  const chicken = () => {
    handlePage('/chicken')
  }

  const veggie = () => {
    handlePage('/veggie')
  }



  return (
    <Wrap  justifyContent='center' alignItems='center' display='flex' bg='#b7dfb8'>
      <Button 
        onClick={() => shortest()} 
        _hover={{background: "white", color: "teal.500",}} 
        fontSize='30px' 
        padding='5px'>
      Shortest</Button>
      <Button 
        onClick={() => longest()} 
        _hover={{background: "white", color: "teal.500",}}
        fontSize='30px' 
        padding='5px'>
          Longest
      </Button>
      <Button 
        onClick={() => chicken()} 
        _hover={{background: "white", color: "teal.500",}}
        fontSize='30px' 
        padding='5px'>
          Chicken
        </Button>
      <Button
        onClick={() => veggie()} 
        _hover={{background: "white", color: "teal.500",}}
        fontSize='30px' 
        padding='5px'>
          Veggie
      </Button>
      <Button 
        _hover={{background: "white", color: "teal.500",}}
        fontSize='30px' 
        padding='5px'>
        <Link to="/recipes/new">
          Add a Item
        </Link></Button>
    </Wrap>
  );
}

export default Navbar;