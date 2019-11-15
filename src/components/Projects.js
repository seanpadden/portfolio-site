import React, {Component} from 'react';
import wordmapper from '../wordmapper-screenshot.jpg'
import '../App.css'

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
      <div>
        <div >
          <div   >
            <img src={wordmapper} className="project-tile" onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} />
            {this.state.hover ?
            <div className="project-text">
            <h1 style={{fontWeight: `900`}} >WordMapper</h1> 
            <p>diggadum</p>
            </div>
            :
            null
            }
          </div>
        
        </div>
      </div>
    )
  }
}

export default Projects;
