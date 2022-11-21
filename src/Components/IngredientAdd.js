import '../App.css';
import React, { useState } from 'react';

function IngredientAdd({ handleAddIngredient }) {

  const [name, setName] = useState('')

  function handleName(e) {
    e.preventDefault();
    let newCity = e.target.value
    setName(newCity)
  }

  return (
    <div className='form-page'>
      <h3>Add an Ingredient</h3>
      Name: <input onChange={handleName}/>
      <br/>
      <br/>
      <button onClick={() => handleAddIngredient(name)}>Add</button>
    </div>
  );
}

export default IngredientAdd;