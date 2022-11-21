import '../App.css';
import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

function Ingredients({ special, add, handleClick }) {

  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'white',
  };


  return (
    <List sx={style} component="nav" aria-label="mailbox folders" style={{maxHeight: 600, overflow: 'auto'}}>
    <h3>Ingredients:</h3>
    <button>Add Ingredient</button>
      {special.ingredients && add ? 
      <List sx={style} component="nav" aria-label="mailbox folders"  style={{maxHeight: 400, overflow: 'auto'}}>
        {special.ingredients.map((item) => 
          <div key={item.id + item.name}>
            <ListItem button onClick={() => handleClick(item)}>
              <ListItemText primary={item.name} />
            </ListItem>
            <Divider/>
          </div>)}
          </List>
        : '' }
      </List>
  );
}

export default Ingredients;