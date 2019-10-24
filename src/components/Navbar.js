import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class Navbar extends Component {
  render(){
    return (
      <div className="navbar">
        <Link to={'/about'} style={{color: `white`, marginRight: `1%`}}>About</Link>
        <Link to={'/projects'} style={{color: `white`, marginRight: `1%`}}>Projects</Link>
        <Link to={'/contact'} style={{color:`white`}}>Contact</Link>

      </div>
    )
  }
}

export default Navbar;
