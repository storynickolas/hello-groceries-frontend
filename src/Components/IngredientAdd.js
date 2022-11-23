import '../App.css';
import React, { useState } from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from 'react-router-dom';

function IngredientAdd({ special, handleAddIngredient }) {

  const [name, setName] = useState('')

  function handleName(e) {
    e.preventDefault();
    let newName = e.target.value
    setName(newName)
  }

  function handleAddition(e) {
    e.preventDefault();
    let newIngr = {name: name, recipe_id: special.id}
    fetch("http://localhost:9292/ingredients", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(newIngr),
    })
      .then((r) => r.json())
      .then((newItem) => handleAddIngredient(newItem));
  }

  return (
    <div className='form-page'>
      <h3>Add an Ingredient</h3>
      Name: <input onChange={handleName}/>
      <br/>
      <br/>
      <ButtonGroup size="large" aria-label="large button group" style={{backgroundColor: "white"}}>
        <Button onClick={handleAddition}>Add</Button>
        <Button><Link to={`/recipes/${special.id}`}>Cancel</Link></Button>
      </ButtonGroup>
    </div>
  );
}

export default IngredientAdd;