import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard';

class App extends React.Component{
  constructor(){
    super();
    // this.state = {
    //   strikes = 0,
    //   balls = 0
    // }
  }
  render(){
    return (
      <div>
        <Dashboard />
      </div>
    )
  }
}

export default App;


