import React, {Component} from 'react';

class About extends Component {
  render(){
    return (
      <div style={{fontFamily: `Spectral SC`, color: `white`, textAlign: `center`, fontSize: `15pt`, marginLeft: `30%`, marginRight: `30%`, width: `40%`, marginTop: `1%`}}>
        My name is Sean. I'm a software engineer. I grew up on Long Island 
        and am a longtime resident of Queens and Brooklyn. 
        <br/><br/>
        I used to work in copywriting 
        and editorial, but jumped into engineering because I love building and fixings 
        things for and with people.
        <br/><br/>
        In my spare time I play guitar, take photos 
        of my cats, and collect Halloween decorations. 
        <br/><br/>
        I love connecting with folks so please drop me a line!
        <div>
          <img src="https://media.giphy.com/media/3gS6dPa2YpUlNhKg1S/giphy.gif"/>
          <br/>
          (pic of me chatting with my buds)
        </div>
      </div>

    )
  }
}

export default About;
