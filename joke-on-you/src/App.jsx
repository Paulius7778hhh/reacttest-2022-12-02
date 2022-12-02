import { useState } from "react";
import { useEffect } from "react";
import MyComponent from './update';
import './App.css';
import Jokes from "./jokes";
import axios from 'axios';
import ajax from 'ajax';

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <MyComponent/>
         <h1>NIEKO NESIGAVO :( </h1>
      </header>
    </div>
  );
}

export default App;
