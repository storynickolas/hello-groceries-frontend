import '../App.css';
import React from 'react';



import { Link } from 'react-router-dom';

function Ingredients({ special }) {


  return (
    <div>
    <h3>Ingredients:</h3>
        <button><Link to={`/recipes/${special.id}/add`}>Add Ingredient</Link></button>
        {special.ingredients ? special.ingredients.map((item) => 
          <div key={item.id + item.name}>
              <p>{item.name}</p>
          </div>): ''}
    </div>      
  );
}

export default Ingredients;