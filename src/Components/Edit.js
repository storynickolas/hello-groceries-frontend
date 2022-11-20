import '../App.css';
import React, { useState } from 'react';

function Edit({ selected, handleSave }) {

  const [protein, setProtein] = useState(selected.protein)
  const [newName, setNewName] = useState(selected.name)
  const [newCook, setNewCook] = useState(selected.cook_time)
  const [newWeb, setNewWeb] = useState(selected.instructions)

  function handleProtein(e) {
    e.preventDefault();
    let newCity = e.target.value
    setProtein(newCity)
  }

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

  function handleEdit() {


    const itemData = {
      'name': newName,
      'protein': protein,
      'cook_time': newCook,
      'instructions': newWeb
    };
    fetch(`http://localhost:9292/recipes/${selected.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((itemData) => handleSave(itemData));
  }

  return (
    <div className='form-page'>
      Name: <input defaultValue={newName} onChange={handleName}/>
      <br/>
      Protein: <input defaultValue={protein} onChange={handleProtein}/>
      <br/>
      Cook time: <input defaultValue={newCook} onChange={handleCook}/>
      <br/>
      Instructions: <input defaultValue={newWeb} onChange={handleWeb}/>
      <br/>
      <button onClick={handleEdit}>Save</button>
    </div>
  );
}

export default Edit;