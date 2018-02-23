import React from 'react';
import Dish from './dish';
import propTypes from 'prop-types';

class Menu extends React.Component {

  orderData = (orderInfo) => {
    this.props.callbackFromParent(orderInfo);
  }

  state = {
    dishes: this.props.initialDishes
  };

  componentDidMount(){
  }

  render (){
    return(
      <div className="menu">
        {this.state.dishes.map(dish =>
          <Dish key={dish.id} {...dish} callbackFromParent={this.orderData}/>
        )}
      </div>
    );
  }
}

Menu.propTypes = {
  initialDishes: propTypes.array.isRequired,
  callbackFromParent : propTypes.func.isRequired
};

export default Menu;
