import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './Clock.js';
import MyComponent from './MyComponent.js';
import ColorBlock from './ColoredBlock.js'
;
/***Components and props */
/*

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome</h2>
        </div>
        <p className="App-intro">
          Hi {this.props.name}!
          The time is {time}
        </p>
      </div>
    );
  }
}
export default App;
*/


/***build a ticking clock component
*/
/*
class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi {this.props.someName}! 
        </p>
        <Clock />
      </div>
    );
  }
}
*/
/*
//Handling EVents
class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi {this.props.someName}! 
        </p>
        <MyComponent />
      </div>
    );
  }
}
export default App;
*/

//One way Data Binding
//Handling EVents
class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          Hi {this.props.someName}! 
        </p>
        <ColorBlock />
      </div>
    );
  }
}
export default App;