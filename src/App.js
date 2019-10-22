import React, {Component} from 'react';
import './App.css';
import Home from './containers/Home.js'
import { Router, Route, Switch } from "react-router";

class App extends Component {
  render(){
    return (
      <div >
        <Home />
      </div>
    )
  }
}

export default App;
