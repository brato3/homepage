import React from 'react';
import '../App.css';
import { Button } from './Button';
import './homepageSection';

function homepageSection() {
  return (
    <div className='homepage-container'>
      <h1>Welcome to E-va</h1>
      <p>E-va wants to make sure that you 
      understand even more about your own body 
      and don't lose track of it.</p>
      <div className='homepage-btns'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
        >
          Click here and get started
        </Button>
              </div>
    </div>
  );
}

export default homepageSection;
