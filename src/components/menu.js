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
        {Object.keys(this.state.dishes).map(dishID =>
          <Dish
            key={dishID}
            {...this.state.dishes[dishID]}
            onClick={this.props.onDishClick}
          />
        )}
      </div>
    );
  }
}

Menu.propTypes = {
  initialDishes: propTypes.object.isRequired,
  onDishClick : propTypes.func.isRequired
};

export default Menu;
