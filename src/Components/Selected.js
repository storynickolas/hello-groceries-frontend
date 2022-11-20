import '../App.css';
import React from 'react';

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import Edit from './Edit';

function Selected({ special, handleDelete, handleEdit, handleCancel, vis, handleSave  }) {



  return (
    <div>
      <h2>{special.name}</h2> 
      <img src={special.image} alt={special.name} className="photo"/>
      <br />
      <ButtonGroup size="large" aria-label="large button group">
        <Button onClick={() => handleDelete()}>Delete</Button>
        {!vis ? <Button onClick={() => handleEdit()}>Edit</Button> : ''}
        {vis ? <Button onClick={() => handleCancel()}>Cancel</Button> : ''}
      </ButtonGroup>
      <br/>
      <br/>
      {!vis ? 
      <div>
        <h3>{'Protein: ' + special.protein}</h3> 
        <h3>{'Cook Time: ' + special.cook_time + ' Min'}</h3> 
        <h3>Instructions: <a href={special.instructions}>{special.name}</a></h3>
      </div> : '' }
      {vis ? <Edit selected={special} handleSave={handleSave}/> : ''}
    </div>
  );
}

export default Selected;