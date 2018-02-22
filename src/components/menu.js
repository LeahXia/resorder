import React from 'react';
import propTypes from 'prop-types';
import Dish from './dish';


class Menu extends React.Component {
  render (){
    return(
      <div className="menu">
        <div>
          {this.props.dishes.map(dish =>
            <Dish {...dish}/>
          )}
        </div>
      </div>
    );
  }
}

Menu.propTypes = {
  dishes: propTypes.array.isRequired
};

export default Menu;
