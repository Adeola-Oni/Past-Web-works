import React, {Component} from 'react';
import './Calculator.css'

class Calculator extends Component{
    state={
        inputs: [],
        inputsArray: []
    }

    storeHandler(e){
        let newValue =  parseInt(e.target.value);
        console.log(typeof(newValue))
        let inputs = [this.state.inputs]
        inputs = inputs + newValue;
        this.setState({inputs})
    }

    keepHandler(){

    }

    clearHandler(e){
        this.setState({inputs : []})
    }

    removeHandler(e){
        let inputs = [...this.state.inputs];
        inputs.pop();
        
        // let values = [...inputs]
        console.log(inputs)
        console.log(this.state.inputs)

        // console.log(values)
        // this.setState({inputs})
    }

    additionHandler(e){
        let newValue = e.target.value;
        let inputs = [this.state.inputs]
        inputs = inputs + newValue;
        this.setState({inputs})
    }

    render(){
        return(
            <div className='Calculator_frame'>
                <div className=''>
                    <input  className='Calculator_input input_space' value={this.state.inputs} onClick={(e)=>this.storeHandler(e)} />
                </div>
                <form className='Calculator_buttons'>
                    <input type='button' className='button colored_button' value='AC' onClick={(e)=>this.removeHandler(e)} />
                    <input type='button' className='button colored_button' value='CLR' onClick={(e)=>this.clearHandler(e)} />
                    <input type='button' className='button colored_button' value='%' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='/' onClick={(e)=>this.storeHandler(e)} />
                </form>

                <form className='Calculator_buttons'>
                    <input type='button' className='button colored_button' value='7' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='8' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='9' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='*'/>
                </form>

                <div className='Calculator_buttons'>
                    <input type='button' className='button colored_button' value='4' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='5' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='6' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='-' onClick={(e)=>this.storeHandler(e)} />
                </div>

                <div className='Calculator_buttons'>
                    <input type='button' className='button colored_button' value='1' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='2' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='3' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='+' onClick={(e)=>this.additionHandler(e)} />
                </div>

                <div className='Calculator_buttons'>
                    <input type='button' className='button colored_button' value='0' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='.' onClick={(e)=>this.storeHandler(e)} />
                    <input type='button' className='button colored_button' value='=' onClick={(e)=>this.storeHandler(e)} />
                </div>
            </div>
        )
    }
}

export default Calculator;