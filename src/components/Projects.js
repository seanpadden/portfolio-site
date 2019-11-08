import React, {Component} from 'react';
import wordmapper from '../wordmapper-screenshot.jpg'
import '../App.css'

class Projects extends Component {
  state = {
    hover: false 
  }

  handleHover = () => {
    this.setState({
      hover: !this.state.hover
    })

  }
  render(){
    return (
      <div>
        <div className="project-container">
          <div onMouseOver={this.handleHover} >
            
            <img src={wordmapper} className="project-tile"/>

          </div>
        
        </div>
      </div>
    )
  }
}

export default Projects;
