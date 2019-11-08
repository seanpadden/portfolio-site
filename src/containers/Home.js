import React, {Component} from 'react';
import '../Home.css';

class Home extends Component {
  render(){
    return (
      <div className="Home-component">
        <div >
          <img style={{display: `block`, marginLeft: `auto`, marginRight: `auto`, width: `50%`}}src="https://media.giphy.com/media/DIbzujHh2PCbm/giphy.gif"/>
        </div>
      </div>
    )
  }
} 

export default Home;
