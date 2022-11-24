import '../App.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Selected({ special, handleDelete }) {

  return (
    <div className='cat'>
      <h2>{special.name}</h2> 
      <img src={special.image} alt={special.name} className="photo"/>
      <br />
      <div>
        <button onClick={() => handleDelete()}>Delete</button>
        <button><Link to={`/recipes/${special.id}/edit`}>Edit</Link></button>
      </div>
      <br/>
      <br/>
      <div>
        <h3>{`Protein: ${special.protein}`}</h3> 
        <h3>{`Cook Time: ${special.cook_time} Min`}</h3> 
        <h3>Instructions: <a href={special.instructions}>{special.name}</a></h3>
      </div>
    </div>
  );
}

export default Selected;