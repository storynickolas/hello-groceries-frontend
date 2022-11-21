import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import RecipeList from './Components/RecipeList';

import Selected from './Components/Selected';
import Ingredients from './Components/Ingredients';
import IngredientAdd from './Components/IngredientAdd';


function App() {
  const [options, setOptions] = useState([])
  const [special, setSpecial] = useState([])
  const [vis, setVis] = useState(false)
  const [add, setAdd] = useState(true)
  const [addIng, setAddIng] = useState(false)

  const [dog, setDog] = useState('')

  useEffect(() => {
    fetch(`http://localhost:9292/recipes${dog}`)
      .then((r) => r.json())
      .then((data) => handlingTest(data))
  }, [dog])

  const handlingTest = (data) => {
    setOptions(data)
    setSpecial(data[0])    
  }


  const handleClick = (item) => {
    setVis(false)
    setAdd(true)
    setSpecial(item)
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
    setVis(true)
  }

  function handleCancel() {
    setVis(false)
  }

  function handleSave(itemData) {
    let cow = special
    delete cow.name
    delete cow.protein
    delete cow.cook_time
    delete cow.instructions
    let beaver = {...cow, ...itemData}

    const newOptions = options.map((item) => {
      if (item.id === beaver.id) {
        return beaver;
      } else {
        return item;
      }
    });
    setOptions([...newOptions])
    setSpecial(beaver)
    setVis(false)

  }

  function addItem() {
    setAdd(false)
  }

  function handleDelete() {
    fetch(`http://localhost:9292/recipes/${special.id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => handleDeleteItem(special.id));
  }

  function handleDeleteItem(deletedItem) {
    const updatedItems = options.filter((item) => item.id !== deletedItem);
    setOptions(updatedItems);

    setSpecial(updatedItems[0])
  }

  function handleAddItem(newItem) {
    setOptions([...options, newItem]);
    setAdd(!add)
  }

  function addIngredient() {
    setAddIng(true)
  }

  function handleAddIngredient(newItem) {
    let selectedCopy = {...special}
    delete selectedCopy.ingredients
    let IngrCopy = special.ingredients
    let newIngr = {id: special.ingredients.length + 1, name: newItem, recipe_id: special.ingredients[0].recipe_id}
    IngrCopy.push(newIngr)
    let cow = {ingredients: IngrCopy}
    let newList = {...special, ...cow}
    setSpecial(newList)
  }

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
          <br/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3}>
            <Grid xs={4}>
              <Item>
                <RecipeList handleClick={handleClick} options={options}/>
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item>
                {special && add && !addIng ? 
                  <Selected 
                  special={special}
                  handleDelete={handleDelete}
                  handleEdit={handleEdit} 
                  handleCancel={handleCancel}
                  vis={vis}
                  handleSave={handleSave}
                  /> : ''}
                {!add ? <Form addItem={handleAddItem} /> : '' }
                {addIng ? <IngredientAdd handleAddIngredient={handleAddIngredient}/> : ''}
              </Item>
            </Grid>
            <Grid xs={4}>
              <Item>
                <Ingredients special={special} add={add} handleClick={handleClick} addIngredient={addIngredient}/>
              </Item>
            </Grid>
          </Grid>
        </Box>
    </div>
  );
}

export default App;
