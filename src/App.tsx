import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {FC } from 'react';
import Gender from './Components/gender';
import Birthday from './Components/birthday';
import './App.less';

function App() {
  return (
    <div className="App">
            <Birthday/>
    </div>
  );
}

export default App;
