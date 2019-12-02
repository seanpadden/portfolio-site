import React, {Component} from 'react';
import wordmapper from '../wordmapper-screenshot.jpg'
import '../Projects.css'
import reactIcon from '../react.png'
import reduxIcon from '../redux.png'
import railsIcon from '../rails.png'
import jsIcon from '../js-logo.png'


class Projects extends Component {

  render(){
    return (
        <div className="project-wrap" >
          <img className="project-img" src={wordmapper} />
          <div className="project-text">
            <h1 style={{fontWeight: `900`}}>WordMapper</h1>
              <h4>
                <a className="project-link" href="https://www.github.com/seanpadden/wordmapper-frontend">GitHub</a>
                <a className="project-link" href="https://wordmapper.surge.sh">Live</a>
                <a className="project-link" href="https://youtu.be/hWi3tgMjqEU">Demo</a>
              </h4> 
            <p>
              An etymological map for the grammatically 
              curious that explores the history 
              of the English language on a map
            </p>
          </div>
          <div className="project-info">
            <p style={{width: `33%`, marginRight: `3%`}}> 
              <img src={reactIcon} style={{height: `50px`, width: `50px`}}/> 
              <h4>React.js</h4>
              Built a dynamic UI with React that allows 
              users to look up words, see their origins 
              rendered on a map, and favorite words and locations
            </p>
            <p style={{width: `33%`, marginRight: `3%`}}> 
              <img src={reduxIcon} style={{height: `50px`, width: `50px`}}/> 
              <h4>Redux.js</h4>
              Incorporated React-Redux to store global 
              state and handle actions and requests, 
              preventing prop-drilling and optimizing client-side logic
            </p>
            <p style={{width: `33%`}}>
            <img src={railsIcon} style={{height: `50px`, width: `80px`}}/> 
              <h4>Ruby on Rails</h4>
              Developed Rails API backend to handle RESTful 
              routing with endpoints for word input, maps, 
              and profiles 
            </p>
          </div>
        </div>
    )
  }
}

export default Projects;
