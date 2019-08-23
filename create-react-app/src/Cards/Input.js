import React from "react";
import './Input.css';

const input = (props) => {
    return (
        <div className = "Input">
       
            <input type="text" onChange={props.changeInput} />
                <p>Lala</p>
     
        </div>

    );
}


export default input;