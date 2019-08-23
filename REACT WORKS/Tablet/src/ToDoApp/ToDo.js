import React, { Component } from 'react';
import Aux from './Aux';
import classes from './ToDo.css';
import PropTypes from 'prop-types';
import { DragSource } from 'react-dnd';
// import { ItemTypes } from './Constants';

const cardSource = {
    beginDrag(props) {
      return {
        text: props.text
      };
    }
  };
  
  /**
   * Specifies the props to inject into your component.
   */
  function collect(connect, monitor) {
    return {
      connectDragSource: connect.dragSource(),
      isDragging: monitor.isDragging()
    };
  }
  
  const propTypes = {
    text: PropTypes.string.isRequired,
  
    // Injected by React DnD:
    isDragging: PropTypes.bool.isRequired,
    connectDragSource: PropTypes.func.isRequired
  };

class ToDo extends Component{
    constructor(props){
        super(props);
        this.state={
            todos :[],
            newInput : '',
            filterWord:'',
            doneIndex : [],
            doneButton:[],
            radioChecked:[],
            noDoubleChecks: []
        }
    }

    inputChange(e){
        this.setState(
            {newInput : e.target.value}
        );
        
    }

    addHandler(){
        let input = this.state.newInput;
        let arr = [...this.state.todos];
        if(input === ''){

        }else{
            arr.push(input)
            this.setState(
                {todos : arr}
            )
            this.setState(
                {newInput : ''}
            )
        } 
    }


    removeHandler(e){
        let works = [...this.state.todos];
        let itemToBeRemoved = parseInt(e.target.value);
        works.filter((item)=>{
            if(itemToBeRemoved === works.indexOf(item)){
                works.splice(works.indexOf(item),1);
                this.setState(
                    {todos : works}
                )
            }
        })  
    }

    filterHandler(e){
        e.persist()
        let word = e.target.value.toLowerCase();
        this.setState({filterWord:word});
    }


    checked(e){
        let allNodes = [...e.target.parentNode.parentNode.childNodes];
        for(let x in allNodes){
            if(allNodes[x].firstChild.checked && allNodes[x].firstChild !== e.target){
                allNodes[x].firstChild.checked = false;
            }
        }
        
        this.setState({doneIndex : parseInt(e.target.value)});
        if(e.target.checked === true){
            this.setState({radioChecked : true })
        }
        else{
            this.setState({radioChecked : false})
        }
    }

    drag(e){
        e.preventDefault();
    }

    drop(e){
        e.preventDefault();
        var data = e.dataTransfer.getData("text");
        e.target.appendChild(document.getElementById(data));
    }

    dragLeave(e){
        // const beginDrag = ((props)=>{
        //     return {
        //       text: props.text
        //     };
        //   })
        // let all = [...this.state.todos];
        // swap(e.target, e.target)
        // const swap=((a,b)=>{
        //     let all = [...this.state.todos];
        //     for(let x in all){
        //         console.log(x[a]);
        //         console.log(x[b])
        //     }
        // })
    }

    


    render(){
        return(
            <div>
                <div className={classes.body}>
                    <div>
                        <h1 className={classes.header}>TO DO APP</h1>
                        <input type="text" className={classes.input} value={this.state.newInput} 
                            onChange={(e)=>this.inputChange(e)} placeholder="New Task"/>
                        <br/>
                        <button className={classes.addButton} onClick={()=>this.addHandler()}>Add</button>
                        <br/>
                        <input type="text" placeholder="Filter" className={classes.input} 
                        onChange={(e)=>this.filterHandler(e)} />

                    </div>

                    
                   
                    <div id="items">
                        <ul onDrag={(e)=>this.drag(e)} onDragLeave={(e)=>this.dragLeave(e)}
                        onDrop ={(e)=>this.drop(e)}>
                        {
                            this.state.todos.filter(item=>item.toLowerCase().indexOf(this.state.filterWord) !== -1).map((item,index)=>{ 
                                return(   
                                    <li key={index+1} draggable={true} className={classes.list} >
                                        <input type='checkbox' className={classes.radio} onChange={(e)=>this.checked(e)} 
                                            value={index}/>
                                        {item}  
                                        <button className={classes.removeButton} value={index} onClick={(e)=>this.removeHandler(e)}> 
                                            Delete 
                                        </button>
                                        
                                        { (index === this.state.doneIndex && this.state.radioChecked ) ? 
                                            <div>
                                              <button onClick={(e)=>this.done(e)} className={classes.doneButton}> 
                                                  Done
                                              </button>
                      
                                              <button onClick={(e)=>this.done(e)} className={classes.cancelButton}> 
                                                  Cancel 
                                              </button>
                                            </div> 
                                            : null 
                                        }
                                        
                                    </li>
                                    )
                                }
                                )
                            }
                        </ul>
                        
                    </div>
                </div>
                <div>
                </div>
            </ div>
        )
    }
}

export default ToDo;