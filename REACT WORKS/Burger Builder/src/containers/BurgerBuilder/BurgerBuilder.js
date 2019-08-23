import React, {Component} from 'react';
import Aux from '../../hoc/Aux.js';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const BURGER_INGREDIENTS = {
    salad : 0.7,
    meat: 1.3,
    bacon: 0.2,
    cheese: 0.3
}

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            salad: 0,
            meat: 0,
            cheese: 0,
            bacon: 0
        },
        TotalPrice: 4
    };


    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const PriceAddition = BURGER_INGREDIENTS[type];
        const oldPrice = this.state.TotalPrice;
        const newPrice = oldPrice + PriceAddition;
        this.setState(
            {TotalPrice: newPrice, ingredients: updatedIngredients}
        )
        
    }

    removeIngredientHandler = (type) =>{
        const oldPrice = this.state.ingredients[type];
        const newPriceoldPrice = oldPrice - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = newPriceoldPrice;
        
    }


    render(){
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder;