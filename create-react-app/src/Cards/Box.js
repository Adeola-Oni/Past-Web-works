import React from "react";
import './Input.css';
// import Input from './Input';

const box = (props) => {
    return (
        <div className="box">
            <textarea type="text" value={props.newValue}/>
        </div>
    );
   
}

export default box;