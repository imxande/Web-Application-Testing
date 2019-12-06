import React from 'react';
import './App.css';
import Display from './components/Display';
import DashBoard from './components/DashBoard';



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

  addStrike = () =>{
    this.setState({
      strikes: this.state.strikes + 1
    })
  }

  addBall = () =>{
    this.setState({
      balls: this.state.balls + 1
    })
  }

  addFoul = () =>{
    this.setState({
      foul: this.state.foul + 1
    })
  }

  addHit = () =>{
    this.setState({
      hit: this.state.hit + 1
    })
  }

  render(){
    return (
      <div className = 'App'>
        <DashBoard
        addStrike =  {this.addStrike}
        addHit = {this.addHit}
        addFoul = {this.addFoul}
        addBall = {this.addBall}
        
        />
        
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


