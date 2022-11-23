import '../App.css';
import React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function RecipeList({ options, handleClick, handlePage, addItem  }) {


  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'white',
  };


  return (
    <List sx={style} component="nav" aria-label="mailbox folders" style={{maxHeight: 600, overflow: 'auto'}}>
      <Navbar handlePage={handlePage} addItem={addItem} />
              <br/>
              <br/>
      {
      options.map((item) => 
      <div key={item.name}>
        <ListItem button onClick={() => handleClick(item)}>
          <ListItemText>
            <Link to={`/recipes/${item.id}`}>{item.name + ' (' + item.cook_time + ' Min)' }</Link>
          </ListItemText>
        </ListItem>
        <Divider/>
      </div>
      )}
    </List>
  );
}

export default RecipeList;