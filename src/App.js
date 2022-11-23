import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import RecipeList from './Components/RecipeList';

import Selected from './Components/Selected';
import Ingredients from './Components/Ingredients';
import IngredientAdd from './Components/IngredientAdd';
import Edit from './Components/Edit';

import { Route, BrowserRouter, Switch } from "react-router-dom";


function App() {
  const [options, setOptions] = useState([])
  const [special, setSpecial] = useState([])

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
    setSpecial(item)
  }

  // Save edits to recipe
  const handleSave =(itemData) => {
    let newAdd = special
    delete newAdd.name
    delete newAdd.protein
    delete newAdd.cook_time
    delete newAdd.instructions
    let newRec = {...newAdd, ...itemData}

    const newOptions = options.map((item) => {
      if (item.id === newRec.id) {
        return newRec;
      } else {
        return item;
      }
    });
    setOptions([...newOptions])
    setSpecial(newRec)
  }

  // Add Item to recipe list
  function handleAddItem(newItem) {
    setOptions([...options, newItem]);
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
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              {/* <Home /> */}
            </Route>
            <Route exact path="/recipes">
              <RecipeList
                key='recipes'
                title='Recipe List'
                handleClick={handleClick} 
                options={options}
              />
            </Route>
            <Route exact path="/recipes/new">
              <Form 
                key='new'
                title='Add a Recipe'
                addItem={handleAddItem} /> 
            </Route>
              <Route exact path='/recipes/:id'>
                <Grid container spacing={3}>
                  <Grid xs={4}>
                    <Item>
                      <RecipeList
                        key={special.name}
                        title='Recipe List'
                        handleClick={handleClick} 
                        options={options}
                        handlePage={handlePage}
                      />
                    </Item>
                  </Grid>
                   <Grid xs={4}>
                    <Item>
                      <Selected 
                        special={special}
                        handleDelete={handleDelete}
                        handleSave={handleSave}
                      />
                    </Item>
                   </Grid>
                   <Grid xs={4}>
                    <Item>
                      <Ingredients 
                        special={special} 
                        handleClick={handleClick} />
                    </Item>
                  </Grid>
                </Grid>
              </Route>
              <Route exact path={'/recipes/:id/edit'}>
                <Edit selected={special} handleSave={handleSave}/>
              </Route>
              <Route exact path={'/recipes/:id/add'}>
                <Item>
                    <Ingredients 
                  special={special} 
                  handleClick={handleClick} />
                  </Item>
                <IngredientAdd 
                  special={special} 
                  handleAddIngredient={handleAddIngredient}
                />
              </Route>
              <Route exact path="/addItem"><Form/></Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
