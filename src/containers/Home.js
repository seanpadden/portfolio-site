import React, {Component} from 'react';
import '../Home.css';

class Home extends Component {
  render(){
    return (
      <div className="Home-component">
        <div style={{fontFamily: `helvetica`, color: `white`, fontSize: `40pt`, textAlign: `center`, padding: `20px`}}>
          Sean Padden
        </div>
      </div>
    )
  }
}

export default Home;
