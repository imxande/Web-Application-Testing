import React from 'react';
import './App.css';
import Display from './components/Display';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      strikes: 0,
      balls: 0,
      foul: 0,
      hit: 0
    }
  }

  render(){
    return (
      <div className = 'App'>
        <Display 
          strikes = {this.state.strikes}
          balls = {this.state.balls} 
          foul = {this.state.foul} 
          hit = {this.state.hit} 
        />
      </div>
    )
  }
}

export default App;


