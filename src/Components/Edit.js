import '../App.css';
import React, { useState } from 'react';

function Edit(selected) {
  console.log(selected.selected)

  // const [protein, setProtein] = useState('')
  // const [newName, setNewName] = useState('')
  // const [newCook, setNewCook] = useState('')
  // const [newWeb, setNewWeb] = useState('')

  // function handleName(e) {
  //   e.preventDefault();
  //   let newCity = e.target.value
  //   setNewName(newCity)
  // }

  // function handleCook(e) {
  //   e.preventDefault();
  //   let newCity = e.target.value
  //   setNewCook(newCity)
  // }

  // function handleWeb(e) {
  //   e.preventDefault();
  //   let newCity = e.target.value
  //   setNewWeb(newCity)
  // }



  return (
    <div className='form-page'>
      Name: <input defaultValue={selected.selected.name} />
      <br/>
      Protein: <input defaultValue={selected.selected.protein} />
      <br/>
      Cook time: <input defaultValue={selected.selected.cook_time} />
      <br/>
      Instructions: <input defaultValue={selected.selected.instructions} />

      {/* <br></br>
      <br></br>
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
      </form> */}
    </div>
  );
}

export default Edit;