import React from 'react';
import Aux from './Aux';
import Ian from '../Images/ian2.PNG'

const aboutContents = ()=>{
    return (
    <Aux>
        <div>
            <img src={Ian} alt={'ian'} 
            style={{width: '30%', float:'left'}}
            /> 
            <p>
            About Us
            </p>
        </div>
    </Aux>
    )
    };

export default aboutContents;