import React from "react";

const person = (props)=>{
    return(
        <div>
            <p>{props.name}, i am {Math.floor(Math.random()*11)}, i live in {props.place}. </p>
            {props.children}
        </div>

    );
}

export default person;