import React, {Component} from 'react';

class About extends Component {
  render(){
    return (
      <div style={{fontFamily: `Spectral SC`, color: `white`, textAlign: `center`, fontSize: `15pt`, 
      marginLeft: `30%`, marginRight: `30%`, width: `40%`, marginTop: `1%`}}>
        My name is Sean. I'm a software engineer. I grew up on Long Island 
        and am a longtime resident of Queens and Brooklyn. 
        <br/><br/>
        I used to work in copywriting 
        and editorial, but jumped into engineering because I love building and fixings 
        things for and with people.
        <br/><br/>
        In my spare time I play music (I used to play in a touring band), take photos 
        of my cats, and collect Halloween decorations. 

      </div>
    )
  }
}

export default About;
