import React ,{Component} from 'react'
import classes from './BurgerIngradients.css'
import PropTypes from 'prop-type';


class BurgerIngradients extends Component {

    render (){
        let ingradient = null;

    switch (this.props.type) {
        case ('bread-bottom'):
            ingradient = <div className={classes.BreadBottom}> </div>;
            break;
        case ('bread-top'):
            ingradient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            )
            break;
        case ('meat'):
            ingradient = <div className={classes.Meat}></div>
            break;

        case ('cheese'):
            ingradient = <div className={classes.Cheese}></div>
            break;

        case ('salad'):
            ingradient = <div className={classes.Salad}> </div>
            break;

        case ('bacon'):
            ingradient = <div className={classes.Bacon}> </div>
            break;

         default:
             ingradient = null;

    

       }

    return ingradient;

}
  

    
}

BurgerIngradients.propTypes ={
   type : PropTypes.toString.isRequired
}
export default BurgerIngradients;