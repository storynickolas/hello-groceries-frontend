import '../App.css';
import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

function RecipeList({ options, handleClick  }) {


  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'white',
  };


  return (
    <List sx={style} component="nav" aria-label="mailbox folders" style={{maxHeight: 600, overflow: 'auto'}}>
      {
      options.map((item) => 
      <div key={item.name}>
        <ListItem button onClick={() => handleClick(item)}>
          <ListItemText primary={item.name + ' (' + item.cook_time + ' Min)' }/>
          </ListItem>
        <Divider/>
      </div>
      )}
    </List>
  );
}

export default RecipeList;