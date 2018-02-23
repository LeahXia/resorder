import React from 'react';
import Dish from './dish';
import propTypes from 'prop-types';


class Menu extends React.Component {

  state = {
    dishes: this.props.initialDishes
  };

  componentDidMount(){
  }

  render (){
    return(
      <div className="menu">
        {this.state.dishes.map(dish =>
          <Dish key={dish.id} {...dish}/>
        )}
      </div>
    );
  }
}

Menu.propTypes = {
  initialDishes: propTypes.array.isRequired
};

export default Menu;
