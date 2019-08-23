import React, { Component } from 'react';
import classes from './App.css';
import Home from './Pages/Home.js'


class App extends Component{

  render(){
    return(
      <div className={classes.center}>
          <Home />
      </div>
    )
  }

}

export default App;
