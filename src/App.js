import './App.css';
import React, { useEffect, useState } from 'react';
import Form from './Components/Form';

import { ChakraProvider } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'

import RecipeList from './Components/RecipeList';

import Selected from './Components/Selected';
import Ingredients from './Components/Ingredients';
import IngredientAdd from './Components/IngredientAdd';
import Edit from './Components/Edit';
import Navbar from './Components/Navbar';

import { Flex, Spacer, Box } from '@chakra-ui/react'


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


  return (
    <ChakraProvider>
    <div className="App">
      <h1>Hello Fresh Grocery List</h1>
        <BrowserRouter>
          <Navbar handlePage={handlePage} />
          <br/>
          <br/>
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
              <Flex>
                <Box p='4' w='30%' bg='red.400'>
                  <RecipeList
                    key={special.name}
                    title='Recipe List'
                    handleClick={handleClick} 
                    options={options}
                    handlePage={handlePage}
                  />
                </Box>
                <Box p='4' w='45%' bg='red.400'>
                  <Selected 
                    special={special}
                    handleDelete={handleDelete}
                    handleSave={handleSave}
                  />
                </Box>
                <Box p='4' w='25%' bg='red.400'>
                  <Ingredients 
                    special={special} 
                    handleClick={handleClick}
                  />
                </Box>
              </Flex>
            </Route>
            <Route exact path={'/recipes/:id/edit'}>
              <Edit selected={special} handleSave={handleSave}/>
            </Route>
            <Route exact path={'/recipes/:id/add'}>

                  <Ingredients 
                special={special} 
                handleClick={handleClick} />

              <IngredientAdd 
                special={special} 
                handleAddIngredient={handleAddIngredient}
              />
            </Route>
            <Route exact path="/addItem"><Form/></Route>
          </Switch>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
}

export default App;
