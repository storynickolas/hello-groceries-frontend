import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import RecipeList from './Components/RecipeList';

import Selected from './Components/Selected';
import Ingredients from './Components/Ingredients';
import IngredientAdd from './Components/IngredientAdd';

import Navbar from './Components/Navbar';


function App() {
  const [options, setOptions] = useState([])
  const [special, setSpecial] = useState([])
  const [vis, setVis] = useState(false)
  const [add, setAdd] = useState(true)
  const [addIng, setAddIng] = useState(false)

  const [page, setPage] = useState('')

  // Request based on selection from navbar - default to first recipe in list
  useEffect(() => {
    fetch(`http://localhost:9292/recipes${page}`)
      .then((r) => r.json())
      .then((data) => handlingTest(data))
  }, [page])

  const handlingTest = (data) => {
    setOptions(data)
    setSpecial(data[0])    
  }

  const handlePage = (newPage) => {
    setPage(newPage)
  }

  // select recipe to appear in center
  const handleClick = (item) => {
    setVis(false)
    setAdd(true)
    setSpecial(item)
  }

  // Show editable recipe info
  function handleEdit() {
    setVis(true)
  }

  // Close edit box without saving
  function handleCancel() {
    setVis(false)
  }

  // Save edits to recipe
  const handleSave =(itemData) => {
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

  // show form to add recipe 
  function addItem() {
    setAdd(false)
  }

  // Add Item to recipe list
  function handleAddItem(newItem) {
    setOptions([...options, newItem]);
    setAdd(!add)
  }

  // Remove recipe from list
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

  // Show add ingredient form
  function addIngredient() {
    setAddIng(true)
  }

  // hide add ingredient form without adding
  function handleCancelAdd() {
    setAddIng(false)
  }

  // add new ingredient
  function handleAddIngredient(newItem) {
    if(newItem.name !== '') {
      let selectedCopy = {...special}
      delete selectedCopy.ingredients
      let IngrCopy = special.ingredients
      IngrCopy.push(newItem)
      let cow = {ingredients: IngrCopy}
      let newList = {...special, ...cow}
      setSpecial(newList)
    }
    setAddIng(false)
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
      <h1>Hello Fresh Grocery List</h1>
        <Navbar handlePage={handlePage} addItem={addItem} />
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
                {addIng ? 
                  <IngredientAdd 
                    special={special} 
                    handleAddIngredient={handleAddIngredient}
                    handleCancelAdd={handleCancelAdd}
                  /> : ''}
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
