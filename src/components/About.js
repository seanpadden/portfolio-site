import React, {Component} from 'react';
import '../App.css'

class About extends Component {
  render(){
    return (
      <div className="about" >
        My name is Sean. I'm a software engineer. I grew up on Long Island 
        and am a longtime resident of Queens and Brooklyn. 
        <br/><br/>
        I used to work in copywriting 
        and editorial, but jumped into engineering because I love building and fixings things with people, for people - with a particular focus on education & sustainability. 
        <br/><br/>
        In my spare time I play guitar, take photos 
        of my cats, and collect Halloween decorations. 
        <br/><br/>
        I love connecting with folks so please drop me a line!
        <div>
        <br/>
          <img src="https://media.giphy.com/media/3gS6dPa2YpUlNhKg1S/giphy.gif"/>
          <br/>
        </div>
      </div>

    )
  }
}

export default About;
