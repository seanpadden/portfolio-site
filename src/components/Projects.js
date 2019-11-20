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
        <div onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave}>
          <img src={wordmapper} className="project-tile"  />
          {this.state.hover ?
          <div className="project-text">
            <h1 style={{fontWeight: `900`}} >WordMapper</h1>
            <p>An etymological map for the grammatically curious that explores the history of the English language on a map</p>
          </div>
          :
          null
          }
        </div>
      </div>
    )
  }

//   render(){
//     return (
//       <div className="hvrbox">
//         <img src={wordmapper} alt="WordMapper" />
//         <div className="hvrbox-layer_top">
//           <h1 className="hvrbox-text">WordMapper</h1>
//         </div>
//       </div>
//     )
//   }

}

export default Projects;
