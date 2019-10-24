import React, {Component} from 'react';
import './App.css';
import Home from './containers/Home.js'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Projects from './components/Projects.js'
import About from './components/About.js'
import Contact from './components/Contact.js'


class App extends Component {
  render(){
    return (
      <div >
        <Switch>
          <Route exact path={'/'} render={routerProps => <Home {...routerProps} />} />
          <Route path={'/projects'} component={Projects} />
          <Route path={'/about'} component={About} />
          <Route path={'/contact'} component={Contact} />
        </Switch>
        <Navbar/>
        
      </div>
    )
  }
}

export default App;
