import '../App.css';
import React from 'react';
import { Center, Stack, Button, Text, Image} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <Center width='100%' bg='#dbefdc'>
    <Stack width='30%' spacing={3} bg='white' padding='20px' borderRadius='10px' >
      <Center width='100%'>
        <Text fontSize='30px' padding='5px' fontWeight='bold'>Meal Kit Recipes</Text>
          <br />
      </Center>
      <Center width='100%'>
        <Text fontSize='20px' padding='5px' fontWeight='bold'>Click here for recipes</Text>
      </Center>
      <Center width='100%' >
        <Button 
          _hover={{background: "white", color: "teal.500",}} 
          fontSize='20px' 
          padding='5px'>
            <Link to={`/recipes/`}>Recipes</Link>
        </Button>
      </Center>
        <Text fontSize='20px' padding='5px' fontWeight='bold'>All recipes are from Hello Fresh website visit their website here for more recipes and can get signed up for fresh meals straight to door</Text>
      <Center width='100%' >
        <Text fontSize='20px' padding='5px' fontWeight='bold'><a href={'https://www.hellofresh.com/'}>Hello Fresh</a></Text>
      </Center>
      <Center width='100%' >
        <Image src='https://img.hellofresh.com/image/upload/c_scale,f_auto,q_auto,w_230/v1600959926/Hello_Fresh_Lockup.png' alt="Hello Fresh Logo" width='20%'/>
      </Center>``
    </Stack>
  </Center>
  );
}

export default Home;