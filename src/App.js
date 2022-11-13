import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [options, setOptions] = useState([])
  const [special, setSpecial] = useState([])
  const [page, setPage] = useState(1)
  const [test, setTest] = useState(1)

  const [dog, setDog] = useState('')

  useEffect(() => {
    fetch(`http://localhost:9292/recipes${dog}`)
      .then((r) => r.json())
      .then((data) => setOptions(data))
  }, [dog])

  useEffect(() => {
    fetch(`http://localhost:9292/recipes/${page}`)
      .then((r) => r.json())
      .then((data) => setSpecial(data))
  }, [page])

  const handleClick = (item) => {
    setPage(item.id)
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

  function handlePost(e) {
    console.log('test')
    e.preventDefault();
    const itemData = {
      'name': 'test2',
      'protein': 'testing',
      'cook_time': 'tests',
      'instructions': 'test'
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
      .then((newItem) => console.log(newItem));
  }

  function handleChange() {
    const itemData = {
      'name': 'test2',
      'protein': 'testing',
      'cook_time': 'tests',
      'instructions': 'test'
    };
    fetch(`http://localhost:9292/recipes/1`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(itemData),
    })
      .then((r) => r.json())
      .then((updatedItem) => console.log(updatedItem));
  }

  function handleDelete() {
    fetch(`http://localhost:9292/recipes/1`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log("deleted!"));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Grocery List</h1>
        <h3>
        <button onClick={() => handleDelete()}>Delete</button>
          <button onClick={() => handleChange()}>TEST1</button>
          <button onClick={(e) => handlePost(e)}>TEST</button>
          <button onClick={() => shortest()}>Shortest</button>
          <button onClick={() => longest()}>Longest</button>
          <button onClick={() => chicken()}>Chicken</button>
          <button onClick={() => veggie()}>Veggie</button>
        </h3>
        <div>
          {page && special.ingredients ? <h2>{special.name}</h2> : ''}
         {page && special.ingredients ? special.ingredients.map((item) => 
            <li key={item.id + item.name}>{item.name}</li>
          ) : ''}
        </div>
        {
        options.map((item) => 
        <div key={item.name}>
          <button onClick={() => handleClick(item)}><h4 >{item.name}</h4></button>
          {/* <h2 >{item.cook_time}</h2>
          <a href={item.instructions}>{item.name}</a> */}
        </div>
        )}
        <div>
    
        </div>
        
      </header>
    </div>
  );
}

export default App;
