import React from 'react';
import classes from './Burger.css'
import BurgerIngradients from './BurgerIngradients/BurgerIngradients'

const burger = (props)=>{

  let transformedIngradients = Object.keys(props.ingredients)
                                   .map(igKey =>{
                                     return [...Array(props.ingredients[igKey])].map((_, index)=>{
                                       return <BurgerIngradients key={igKey + index} type={igKey}></BurgerIngradients>
                                     })
                                   }) 
                                   .reduce((arr, el)=>{
                                     return arr.concat(el);
                                   }, []);

  if(transformedIngradients.length === 0 ){
    transformedIngradients = <p> Please start adding Ingredients </p>; 
  }
  return (
      <div className={classes.Burger}> 
      <BurgerIngradients type= "bread-top"></BurgerIngradients>
          
            {transformedIngradients}

      <BurgerIngradients type= "bread-bottom"></BurgerIngradients>
           
      </div>
  )
}

export default burger;