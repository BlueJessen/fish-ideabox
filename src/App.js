
import './App.css';
import React, {Component} from 'react'
import Form from './Form'
import FishData from './FishData'

function App() {
  return (
    <div className='page-container'>
    <header>
      <h1>What kind of fish are you?</h1>
      <p>🐟🐠</p>
    </header>
      <Form />
      <FishData />
    </div>
  )
}

export default App;
