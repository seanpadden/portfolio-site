import React, {Component} from 'react';
import '../Home.css';
import { Link } from 'react-router-dom'


class Header extends Component {
  render(){
    return (
      <div className="Header-component">
        <div style={{fontFamily: `Spectral SC`, color: `white`, fontSize: `40pt`, textAlign: `center`, padding: `20px`}}>
        <Link to={'/'} style={{color: `white`, textDecoration: `none`}}>Sean Padden</Link>

        </div>
      </div>
    )
  }
} 

export default Header;
