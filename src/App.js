import React, {Component} from 'react';
import './App.css';
import Home from './containers/Home.js'
import { Router, Route, Switch } from "react-router";
import Navbar from './components/Navbar.js'
import Projects from './components/Projects.js'

class App extends Component {
  render(){
    return (
      <div >
        <Navbar/>
        <Home />
        <Projects/>
      </div>
    )
  }
}

export default App;
