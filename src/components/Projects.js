import React, {Component} from 'react';
import wordmapper from '../wordmapper-screenshot.jpg'
import recyclical from '../recyclical-screenshot.png'
import weathercloset from '../weather-closet-screenshot.png'
import reactIcon from '../react.png'
import reduxIcon from '../redux.png'
import railsIcon from '../rails.png'
import jsIcon from '../js-logo.png'
import geocoding from '../geocoding-icon.png'
import weatherbit from '../weatherbit.png'
import htmlCssLogo from '../html-css-logo.png'
import '../Projects.css'

const slideWordMapper = (
  <div className="project-wrap" >
          <img className="project-img" src={wordmapper} />
          <div className="project-text">
            <h1 style={{fontWeight: `900`}}>WordMapper</h1>
              <h4>
                <a className="project-link" href="https://www.github.com/seanpadden/wordmapper-frontend">GitHub</a>
                <a className="project-link" href="https://wordmapper.surge.sh">Live</a>
                <a className="project-link" href="https://youtu.be/hWi3tgMjqEU">Demo</a>
              </h4> 
            <p>
              An etymological map for the grammatically 
              curious that explores the history 
              of the English language on a map
            </p>
          </div>
          <div className="project-info">
            <p style={{width: `33%`, marginRight: `3%`}}> 
              <img src={reactIcon} style={{height: `50px`, width: `50px`}}/> 
              <h4>React.js</h4>
              Built a dynamic UI with React that allows 
              users to look up words, see their origins 
              rendered on a map, and favorite words and locations
            </p>
            <p style={{width: `33%`, marginRight: `3%`}}> 
              <img src={reduxIcon} style={{height: `50px`, width: `50px`}}/> 
              <h4>Redux.js</h4>
              Incorporated React-Redux to store global 
              state and handle actions and requests, 
              preventing prop-drilling and optimizing client-side logic
            </p>
            <p style={{width: `33%`}}>
            <img src={railsIcon} style={{height: `50px`, width: `80px`}}/> 
              <h4>Ruby on Rails</h4>
              Developed Rails API backend to handle RESTful 
              routing with endpoints for word input, maps, 
              and profiles 
            </p>
          </div>
        </div>
)

const slideRecylical = (
  <div className="project-wrap" >
          <img className="project-img" src={recyclical} />
          <div className="project-text">
            <h1 style={{fontWeight: `900`}}>Recyclical</h1>
              <h4>
                <a className="project-link" href="https://github.com/seanpadden/Recyclical-Front-End">GitHub</a>
              </h4> 
            <p>
            An environmentally conscious app for New Yorkers 
            looking for public recycling bins near them

            </p>
          </div>
          <div className="project-info">
            <p style={{width: `33%`, marginRight: `3%`}}> 
              <img src={reactIcon} style={{height: `50px`, width: `50px`}}/> 
              <h4>React.js</h4>
              Developed a React frontend to utilize 
              component hierarchy, providing an intuitive
              user interface
            </p>
            <p style={{width: `33%`, marginRight: `3%`}}> 
              <img src={railsIcon} style={{height: `50px`, width: `80px`}}/> 
              <h4>Ruby on Rails</h4>
              Created custom single-factor authentication 
              using BCyrpt’s hashing function in Rails API
              to store encrypted passwords

            </p>
            <p style={{width: `33%`}}>
            <img src={geocoding} style={{height: `50px`, width: `80px`}}/> 
              <h4>Google GeoCoding</h4>
              Attached event handlers to React forms and 
              used Google GeoCoding API to convert current 
              address to coordinates
            </p>
          </div>
        </div>
)

const slideWeatherCloset = (
  <div className="project-wrap" >
          <img className="project-img" src={weathercloset} />
          <div className="project-text">
            <h1 style={{fontWeight: `900`}}>Weather Closet</h1>
              <h4>
                <a className="project-link" href="https://github.com/seanpadden/Weather-Closet">GitHub</a>
              </h4> 
            <p>
            A weather app that shows users the current weather 
            of a location they enter and allows them to favorite cities
            </p>
          </div>
          <div className="project-info">
            <p style={{width: `33%`, marginRight: `3%`}}> 
              <img src={jsIcon} style={{height: `50px`, width: `50px`}}/> 
              <h4>JavaScript</h4>
              Used JavaScript to design frontend to create a 
              dynamic web-app that allows users to search for 
              the current weather of a given location
            </p>
            <p style={{width: `33%`, marginRight: `3%`}}> 
              <img src={htmlCssLogo} style={{height: `50px`, width: `50px`}}/> 
              <h4>Ruby on Rails</h4>
              Original styling with HTML5 and CSS3
            </p>
            <p style={{width: `33%`}}>
            <img src={weatherbit} style={{height: `50px`, width: `80px`}}/> 
              <h4>WeatherBit.io</h4>
              Utilized WeatherBit API to show up-to-date weather data to users
            </p>
          </div>
        </div>
)

class Projects extends Component {

  state = {
    index: 0,
    currentSlide: [slideWordMapper, slideRecylical, slideWeatherCloset]
  }

  onClickForward = () => {
    if (this.state.index < 2) {
      this.setState({
        index: this.state.index + 1
      })
    }
    else {
      this.setState({
        index: 0
      })
    }
  }

  onClickBackward = () => {
    if (this.state.index === 0){
      this.setState({
        index: 2
      })
    }
    else {
      this.setState({
        index: this.state.index - 1
      })
    }
  }



  render(){
    return (
      <div>
        {this.state.currentSlide[this.state.index]}
        <button onClick={this.onClickForward}>forward</button>
        <button onClick={this.onClickBackward}>back</button>

      </div>
        
    )
  }
}

export default Projects;
