import React from 'react'
import Aux from '../../../hoc/Auxillary'
import Button from '../../UI/Button/Button'
const orderSummery = (props)=>{
     const ingradientSummery = Object.keys(props.ingredients)
                                  .map(igKey =>{
                                      return <li key={igKey}>
                                          <span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
                                          </li>
                                  });
      return (
          <Aux>
              <h3>Your Order</h3>
              <p>A delecious burger with the following ingradients:</p>

              <ul>
                 {ingradientSummery}
              </ul>
              
              <p>Total Price: {props.price.toFixed(2)}</p>
              <p>Continue to Checkout</p>
              <Button buttonType="Danger" clicked={props.purchaceCancelled}>CANCEL</Button>
              <Button buttonType="Success" clicked={props.purchaceContinue}>CONTINUE</Button>
          </Aux>
      )
}

export default orderSummery;
