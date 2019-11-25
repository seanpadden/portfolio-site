import React, {Component} from 'react';
import wordmapper from '../wordmapper-screenshot.jpg'
import '../Projects.css'

class Projects extends Component {
  state = {
    hover: false 
  }

  handleEnter = () => {
    this.setState({
      hover: true
    })
  }

  handleLeave = () => {
    this.setState({
      hover: false
    })
  }

  
  render(){
    return (
        <div className="wrapper" >
          <img src={wordmapper} className="project-tile" />

          <div className="project-text">
            <h1 style={{fontWeight: `900`}} >WordMapper</h1>
            <p>An etymological map for the grammatically curious that explores the history of the English language on a map</p>
          </div>

        </div>
    )
  }
}

export default Projects;
