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

  // addStrike Method
  addStrike = () =>{
    if (this.state.strikes === 2){
      this.setState({
        strikes: 0,
        balls: 0
      })
    }
    else {
      this.setState({
        strikes: this.state.strikes + 1
      })
    }
  }
   
  // add ball method
  addBall = () =>{
    if (this.state.balls === 3){
      this.setState({
        strikes: 0,
        balls: 0
      })
    }
    else {
      this.setState({
        balls: this.state.balls + 1
      })
    }
  }

  // add foul method
  addFoul = () =>{
  
    if (this.state.strikes === 2){
      this.setState({
        strikes: 2,

      })
    }
    else {
      this.setState({
        strikes: this.state.strikes + 1,
      })
    }
  }

  // add hit method
  addHit = () =>{
    this.setState({
      strikes: 0,
      balls: 0
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


