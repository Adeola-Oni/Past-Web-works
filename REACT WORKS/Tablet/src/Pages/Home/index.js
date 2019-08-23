import React, { Component } from 'react';
import classes from '../../App.css';
import Home from '../Home'
import HomeContents from '../HomeContents';


class App extends Component{

  render(){
    return(
      <div className={classes.center}>
          <Home name={'home'}  output={<HomeContents />} />
      </div>
    )
  }

}

export default App;
