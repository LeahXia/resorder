import React, { Component} from 'react';
import propTypes from 'prop-types';

class Dish extends Component {
  handleClick = () => {
    console.log(this.props.dishName);
  };
  render(){
    return (
      <div className="dish link col-sm-3" onClick={this.handleClick}>
        <img className="dishImage" />
        <div className="dishName">
          {this.props.dishName}
        </div>
        <div className="dishPrice">
          {this.props.dishPrice}
        </div>
      </div>
    );
  }
}

Dish.propTypes = {
  dishName : propTypes.string.isRequired,
  dishPrice : propTypes.number.isRequired
};


export default Dish;
