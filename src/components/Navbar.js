import React, {Component} from 'react';
import { Link } from 'react-router-dom'


class Navbar extends Component {

  state = {
    activePage: false
  }

  changeUnderline = () => {
    this.setState({
      activePage: true
    })
  }
  render(){
    return (
      <div className="navbar">
        <Link to={'/about'} className="navlink" style={{marginRight: `1%`}}>About</Link>
        <Link to={'/projects'} className="navlink" style={{marginRight: `1%`}}>Projects</Link>
        <Link to={'/contact'} className="navlink">Contact</Link>

      </div>
    )
  }
}

export default Navbar;
