import '../App.css';
import React from 'react';

import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'


import {Link} from 'react-router-dom';
// import Navbar from './Navbar';

function RecipeList({ options, handleClick, handlePage }) {


 

  return (
    <List>
      {
      options.map((item) => 
      <ListItem key={item.name}>
        <button onClick={() => handleClick(item)}>
            <Link to={`/recipes/${item.id}`} underline="none" color='#459c48' >{`${item.name} (${item.cook_time} Min)`}</Link>
        </button>
      </ListItem>
      )}
      </List>
  );
}

export default RecipeList;

