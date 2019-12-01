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
        <div className="project-wrap" >
          <img className="project-img"src={wordmapper} />
            <h1 className="project-text" style={{fontWeight: `900`}} >WordMapper</h1>
            <p className="project-text" >An etymological map for the grammatically curious that explores the history of the English language on a map</p>
        </div>
    )
  }
}

export default Projects;
