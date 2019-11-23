import React, {Component} from 'react';
import SocialIcon from 'react-social-icons'
import '../App.css'

class Contact extends Component {
  render(){
    return (
      <div className="about" style={{color: `white`, textDecoration: `none`}} >
        <a href={`mailto:sean.padden7@gmail.com`} style={{color: `white`, textDecoration: `none`}} >sean.padden7@gmail.com</a>
        <br/>
        <a href={`https://www.linkedin.com/in/sean-padden/`} style={{color: `white`, textDecoration: `none`}}>LinkedIn</a>
        <br/>
        Cell: (631) 241-0485
        <br/>


      </div>
    )
  }
}

export default Contact;
