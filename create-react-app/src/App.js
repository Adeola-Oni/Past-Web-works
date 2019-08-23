import React, { Component } from 'react';
// import Input from './Cards/Input';
// import Box from './Cards/Box';
import Person from './Person/Person.js';
import Button from './Person/Button.js';
import Radium from 'radium';
import './App.css';
import Calculator from './Calculator/Calculator'

// class App extends Component {
//   state = {
//     value : '',
//     status: false
//   }

//   changeBoxValueHandler = (event) =>{
//     let getInputValue = event.target.value;
//     console.log(getInputValue)
//     this.setState({
//       value: getInputValue
//     })
//   }

//   render() {
//     const valueArray = this.state.value.split(' ');
//     console.log(valueArray)
//     let boxValue = valueArray.map((item, i) => {
//         return <Box newValue={item} key={i}/>
//     })

//     return (
//       <div >
//         <Input 
//           changeInput={this.changeBoxValueHandler} inputValue={this.state.value}
//         />

//         {boxValue}

//       </div>
     
//     );
//   }
// }


class App extends Component{
  // state = {
  //   person : [
  //     {name:"Adeola", place:"Abuja"}
  //   ],
  //   status : true
  // }

  
  // clickHandler = () =>{
  //   let newPerson = {...this.state.person};
  //   newPerson[0].name = "That Basic ass bitch";
  //   newPerson[0].place = "Sussex London";
  //   console.log(newPerson);
  //   this.setState({
  //     person: newPerson
  //   });
  // }

  showHandler = () => {
    const newStatus = this.state.status;
    this.setState({
      status : !newStatus
    })
  }

  render(){
    return (
        <div>
          <Calculator />
        </div>
      // <div className="center">
      //       <Button 
      //         click={this.showHandler}
      //         style ={style}
      //       />
      //       {this.state.status === true ?
      //       <Person name={this.state.person[0].name} place={this.state.person[0].place}> I am amazing</Person>      
      //       : null}
      // </div>
    );
  }

}

export default Radium(App);
