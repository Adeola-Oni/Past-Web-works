import React, { Component } from 'react';
import classes from '../../App.css';
import Home from '../Home'


class App extends Component{

  render(){
    return(
      <div className={classes.center}>
          <Home name={'about'}/>
      </div>
    )
  }

}

export default App;
