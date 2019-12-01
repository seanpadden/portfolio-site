import React, {Component} from 'react';
import wordmapper from '../wordmapper-screenshot.jpg'
import '../Projects.css'

class Projects extends Component {

  render(){
    return (
        <div className="project-wrap" >
          <img className="project-img"src={wordmapper} />
          <div className="project-text">
            <h1 style={{fontWeight: `900`}}>WordMapper</h1>
            <h4>
              <a className="project-link" href="https://www.github.com/seanpadden/wordmapper-frontend">GitHub</a>
              <a className="project-link" href="https://wordmapper.surge.sh">Live</a>
              <a className="project-link" href="https://youtu.be/hWi3tgMjqEU">Demo</a>
            </h4> 
            <p>An etymological map for the grammatically curious that explores the history of the English language on a map</p>
          </div>
        </div>
    )
  }
}

export default Projects;
