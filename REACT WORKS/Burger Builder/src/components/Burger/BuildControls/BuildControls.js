import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl.js';

let controls = [
    {label: 'Salad', type:'Salad'},
    {label: 'Bacon', type:'Bacon'},
    {label: 'Meat', type:'Meat'},
    {label: 'Cheese', type:'Cheese'}
]

const buildControls = ()=>(
    <div className={classes.BuildControls}>
        {controls.map(ctrl =>(
            <BuildControl key={ctrl.label} label={ctrl.label} />
        ))

        }
    </div>
)

export default buildControls;