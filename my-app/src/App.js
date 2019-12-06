import React from 'react';
import './App.css';
import Display from './components/Display';

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
        <Display />
      </div>
    )
  }
}

export default App;


