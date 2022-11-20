import '../App.css';
import React, { useState } from 'react';

function Form({ addItem }) {

  const [protein, setProtein] = useState('')
  const [newName, setNewName] = useState('')
  const [newCook, setNewCook] = useState('')
  const [newWeb, setNewWeb] = useState('')

  function handleName(e) {
    e.preventDefault();
    let newCity = e.target.value
    setNewName(newCity)
  }

  function handleCook(e) {
    e.preventDefault();
    let newCity = e.target.value
    setNewCook(newCity)
  }

  function handleWeb(e) {
    e.preventDefault();
    let newCity = e.target.value
    setNewWeb(newCity)
  }


  function handleSelect(e) {
    e.preventDefault();
    let newState = e.target.value
    setProtein(newState)
  }

  function handlePost(e) {
    console.log('test')
    e.preventDefault();
    const itemData = {
      'name': newName,
      'protein': protein,
      'cook_time': newCook,
      'instructions': newWeb
    };
    fetch("http://localhost:9292/recipes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((newItem) => addItem(newItem));
  }
    


  return (
    <div className='form-page'>
      <form className='form'>
        <h1>Add a Recipe</h1>
        Protein: 
        <select onChange={handleSelect} className="input">
          <option value="veggie">Veggie</option>
          <option value="chicken">Chicken</option>
          <option value="turkey">Turkey</option>
        </select>
        <br/>
        Name: <input onChange={handleName} className="input"></input>
        <br/>
        Cook Time: <input onChange={handleCook} className="input"></input>
        <br/>
        Recipe URL: <input onChange={handleWeb} className="input"></input>
        <div className='submit'>
          <button onClick={handlePost} className="button">Add Item</button>
        </div>
      </form>
    </div>
  );
}

export default Form;