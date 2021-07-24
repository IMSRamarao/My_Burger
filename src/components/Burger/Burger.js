import React from 'react';

import classes from './Burger.css'
import BurgerIngredients from './Burgeringredients/BurgerIngredients';

const burger = (props) => {
    console.log(props.ingredients)
    let trasformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            console.log(igKey);
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                console.log(i);
                return <BurgerIngredients key={igKey + i} type={igKey} />
            });
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (trasformedIngredients.length === 0) {
        trasformedIngredients = <p>Please Start adding ingredients!</p>
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top' />
            {trasformedIngredients}
            <BurgerIngredients type='bread-bottom' />
        </div>
    )
}
export default burger;