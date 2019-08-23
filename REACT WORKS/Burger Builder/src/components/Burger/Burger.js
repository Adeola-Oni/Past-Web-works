import React from 'react';
import classes from './Burger.css';
import build from '../../containers/BurgerBuilder/BurgerBuilder';
import BurgerIngredient from './BurgerIngredients/BurgerIngredients.js';

const burger = (props) => {
    let middleIngredients = Object.keys(props.ingredients).map(
        (key)=> [...Array(props.ingredients[key])].map(
            (_, i)=>{
            return <BurgerIngredient type={key} key={key +i}/>
            }
        )
    )

        .reduce((arr,el)=>{
            return arr.concat(el)
        }, [])
    
        console.log(middleIngredients);
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {middleIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger;