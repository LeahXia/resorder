import React, { Component} from 'react';
import propTypes from 'prop-types';

var orderStamp;

class Dish extends Component {

  handleClick = () => {

    var dishID = this.props.id;
    this.props.onClick(dishID);

    if (!orderStamp) {
      orderStamp = new Date().getTime();
    }

  };
  render(){
    return (
      <div className="dish link col-sm-3" onClick={this.handleClick}>
        <img className="dishImage" />
        <div className="dishName">
          {this.props.dishName}
        </div>
        <div className="dishPrice">
          $ {this.props.dishPrice}
        </div>
      </div>
    );
  }
}

Dish.propTypes = {
  dishName : propTypes.string.isRequired,
  dishPrice : propTypes.number.isRequired,
  id : propTypes.number.isRequired,
  onClick : propTypes.func.isRequired
};


export default Dish;
