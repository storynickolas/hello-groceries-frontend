import '../App.css';
import React from 'react';

import { Link } from 'react-router-dom';

function Navbar({ handlePage }) {

  const shortest = () => {
    handlePage('/quick')
  }

  const longest = () => {
    handlePage('/by_time')
  }

  const chicken = () => {
    handlePage('/chicken')
  }

  const veggie = () => {
    handlePage('/veggie')
  }

  return (
    <div>

            <button onClick={() => shortest()}>Shortest</button>
            <button onClick={() => longest()}>Longest</button>
            <button onClick={() => chicken()}>Chicken</button>
            <button onClick={() => veggie()}>Veggie</button>
            <button><Link to="/recipes/new">Add a Item</Link></button>
            </div>
  );
}

export default Navbar;