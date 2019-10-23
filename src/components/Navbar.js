import React, {Component} from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'


class Navbar extends Component {
  render(){
    return (
      <div className="navbar">
        <Link to={'/about'}>About</Link>
        <Link to={'/projects'}>Projects</Link>
        <Link to={'/contact'}>Contact</Link>

      </div>
    )
  }
}

export default Navbar;
