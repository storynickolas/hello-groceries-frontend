import '../App.css';
import React, { useState } from 'react';

function IngredientAdd({ special, handleAddIngredient }) {

  const [name, setName] = useState('')

  function handleName(e) {
    e.preventDefault();
    let newCity = e.target.value
    setName(newCity)
  }

  function handleAddition(e) {
    console.log('test')
    e.preventDefault();
    let newIngr = {id: special.ingredients.length + 1, name: name, recipe_id: special.ingredients[0].recipe_id}
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
      <button onClick={handleAddition}>Add</button>
    </div>
  );
}

export default IngredientAdd;