import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class Navbar extends Component {
  render(){
    return (
      <div className="navbar">
        <Link to={'/about'} style={{color: `white`, marginRight: `1%`, textDecoration: `none`}}>About</Link>
        <Link to={'/projects'} style={{color: `white`, marginRight: `1%`, textDecoration: `none`}}>Projects</Link>
        <Link to={'/contact'} style={{color:`white`, textDecoration: `none`}}>Contact</Link>

      </div>
    )
  }
}

export default Navbar;
