import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { ToDoListList } from './components/ToDoListList';

function App() {
  return (
    <div className="App">
      <header>
        <h1>To-Do List Maker Maker</h1>
        <p>Everyone knows that there's nothing which excites senior devs more than seeing a JavaScript to-do list app in a portfolio. In such a hot market, it's become difficult for companies to find enough to-do list apps to meet their needs. Enter <strong>To-Do List Maker Maker</strong>, a cutting-edge tool empowering organizations to generate hundreds of to-do list apps without having to post an ad for a front-end developer position and wait to receive portfolios. Synergize your vertical integration by generating as many to-do list apps as your business needs!</p>
      </header>
      <ToDoListList />
    </div>
  );
}

export default App;
