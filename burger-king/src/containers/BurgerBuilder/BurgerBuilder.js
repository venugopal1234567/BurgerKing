import React, { Component } from 'react'
import Aux from '../../hoc/Auxillary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';

const INGRADIENT_PRICE = {
   
       salad : 0.5,
       bacon : 0.4,
       cheese : .7,
       meat : .9
    
 }

class BurgerBuilder extends Component {

    state = {
       ingredients :{
          salad : 0,
          bacon : 0,
          cheese : 0,
          meat : 0
       },
       totalPrice : 4,
       purchasable : false,
       purchasing : false
    }


    updatePurchaseState (updatedIngradients) {
      const ingredients = {
          ...updatedIngradients
      }
      const sum = Object.keys(ingredients)
                      .map(igKey =>{
                          return ingredients[igKey];
                      })
                      .reduce((sum, el)=>{
                        return sum+el;
                      },0)
       this.setState({
           purchasable: sum>0
       })
    }


    addIngredientHandler = (type)=>{
        
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngradients = {
            ...this.state.ingredients
        };
        updatedIngradients[type] = updatedCount
        const priceAddition = INGRADIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients : updatedIngradients,
            totalPrice:newPrice

        })
        this.updatePurchaseState(updatedIngradients);
    }

    removeIngredientsHandler = (type)=>{
        const oldCount = this.state.ingredients[type];
        if(oldCount <=0){
            return;
        }
        const updatedCount = oldCount-1;
        const updatedIngradients = {
            ...this.state.ingredients
        };

        updatedIngradients[type] = updatedCount
        const priceAddition = INGRADIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceAddition;

        this.setState({
            ingredients : updatedIngradients,
            totalPrice:newPrice

        })

        this.updatePurchaseState(updatedIngradients);
    }

    purchaceHandler = ()=>{
        this.setState({
            purchasing: true
        })
    }

    purchaseCancelHandler =()=>{
        this.setState({
            purchasing:false
        })
    }
    
    purchaceContinueHandler =()=>{
       alert('You continue')
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        }

        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <=0 ;

        }


        return (
            <Aux>
                  <Modal show={this.state.purchasing} modalClosed = {this.purchaseCancelHandler}>
                      <OrderSummery 
                      purchaceCancelled={this.purchaseCancelHandler}
                      purchaceContinue={this.purchaceContinueHandler}
                      ingredients={this.state.ingredients}
                      price={this.state.totalPrice}/></Modal>
                  <Burger ingredients={this.state.ingredients} /> 
             

                  <BuildControls 
                   ingredientAdded={this.addIngredientHandler}  
                   ingredientRemoved={this.removeIngredientsHandler}
                   disabled ={disabledInfo}
                   price={this.state.totalPrice}
                   purchasable={this.state.purchasable}
                   ordered ={this.purchaceHandler}/>

            </Aux>

        )
    }


}

export default BurgerBuilder;