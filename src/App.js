import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';
import Edit from './Components/Edit';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';


function App() {
  const [options, setOptions] = useState([])
  const [special, setSpecial] = useState([])
  const [page, setPage] = useState(1)
  const [test, setTest] = useState(1)
  const [vis, setVis] = useState(false)
  const [curr, setCurr] = useState()
  const [formVis, setFormVis] = useState(false)
  const [add, setAdd] = useState(true)

  const [dog, setDog] = useState('')

  useEffect(() => {
    fetch(`http://localhost:9292/recipes${dog}`)
      .then((r) => r.json())
      .then((data) => setOptions(data))
  }, [dog])

  useEffect(() => {
    fetch(`http://localhost:9292/recipes/${page}`)
      .then((r) => r.json())
      .then((data) => setSpecial(data))
  }, [page])

  const handleClick = (item) => {
    setVis(false)
    setAdd(true)
    setPage(item.id)
  }

  const shortest = () => {
    setDog('/quick')
  }

  const longest = () => {
    setDog('/by_time')
  }

  const chicken = () => {
    setDog('/chicken')
  }

  const veggie = () => {
    setDog('/veggie')
  }

  function handleEdit() {
    console.log(special)
    setCurr(special)
    setVis(true)
  }

  function handleSave() {
    console.log('Saving')
    setVis(false)
  }

  function addItem() {
    setAdd(false)
    setFormVis(true)
  }



  function handleChange() {
    console.log(special)
    const itemData = {
      'name': 'test2',
      'protein': 'testing',
      'cook_time': 'tests',
      'instructions': 'test'
    };
    fetch(`http://localhost:9292/recipes/${special.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((updatedItem) => console.log(updatedItem));
  }

  function handleDelete() {
    fetch(`http://localhost:9292/recipes/${special.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));
  }

  const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'white',
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="App">
        <h1>Grocery List</h1>
          <ButtonGroup size="large" aria-label="large button group" style={{backgroundColor: "white"}}>
            <Button onClick={() => shortest()}>Shortest</Button>
            <Button onClick={() => longest()}>Longest</Button>
            <Button onClick={() => chicken()}>Chicken</Button>
            <Button onClick={() => veggie()}>Veggie</Button>
            <Button onClick={() => addItem()}>Add a Item</Button>
          </ButtonGroup>
          <br/>
        {/* {formVis ? <Form/> : ''} */}
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <Item>
                <List sx={style} component="nav" aria-label="mailbox folders" style={{maxHeight: 600, overflow: 'auto'}}>
                  {
                  options.map((item) => 
                  <div >
                    <ListItem button key={item.name} onClick={() => handleClick(item)}>
                      <ListItemText primary={item.name + ' (' + item.cook_time + ' Min)' }/>
                      </ListItem>
                    <Divider/>
                  </div>
                  )}
                </List>
              </Item>
            </Grid>
            <Grid xs={8}>
              <Item>
                  {page && special.ingredients && add ? 
                  <div>
                  <h2>{special.name}</h2> 
                  <img src={special.image} alt={special.name} className="photo"/>
                  <br />
                  <ButtonGroup size="large" aria-label="large button group">
                    <Button onClick={() => handleDelete()}>Delete</Button>
                    <Button onClick={() => handleEdit()}>Edit</Button>
                    {vis ? <Button onClick={() => handleSave()}>Save</Button> : ''}
                  </ButtonGroup>
                  <br/>
                  <br/>
                  {vis ? <Edit selected={curr} /> : ''}
                  <h3>Ingredients:</h3>
                  </div>
                    : ''}
                {page && special.ingredients && add ? 
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
                  {!add ?
                  <Form/> 
                : '' }
              </Item>
            </Grid>
          </Grid>
        </Box>
    </div>
  );
}

export default App;
