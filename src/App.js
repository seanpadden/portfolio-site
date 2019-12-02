import React, {Component} from 'react';
import './App.css';
import Home from './containers/Home.js'
import { Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import Projects from './components/Projects.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Header from './components/Header.js'


class App extends Component {
  render(){
    return (
      <div >
        <Header/>
        <Navbar/>
        <Switch>
          <Route exact path={'/'} render={routerProps => <Home {...routerProps} />} />
          <Route path={'/projects'} component={Projects} />
          <Route path={'/about'} component={About} />
          <Route path={'/contact'} component={Contact} />
        </Switch>
        <p className="copyrite">©️ Sean Padden 2019</p>
      </div>
    )
  }
}

export default App;
