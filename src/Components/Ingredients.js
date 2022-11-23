import '../App.css';
import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

function Ingredients({ special, add, handleClick, addIngredient }) {

  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'white',
  };


  return (
    <List sx={style} component="nav" aria-label="mailbox folders" style={{maxHeight: 600, overflow: 'auto'}}>
    <h3>Ingredients:</h3>
    <ButtonGroup size="large" aria-label="large button group" style={{backgroundColor: "white"}}>
        <Button><Link to={`/recipes/${special.id}/add`}>Add Ingredient</Link></Button>
    </ButtonGroup>
      <List sx={style} component="nav" aria-label="mailbox folders"  style={{maxHeight: 400, overflow: 'auto'}}>
        {special.ingredients.map((item) => 
          <div key={item.id + item.name}>
            <ListItem >
              <ListItemText primary={item.name} />
            </ListItem>
            <Divider/>
          </div>)}
          </List>
      </List>
  );
}

export default Ingredients;