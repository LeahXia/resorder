import React, { Component} from 'react';
import propTypes from 'prop-types';

var dishCount = 0;
var total = 0;

class Dish extends Component {

  handleClick = () => {
    dishCount += 1;
    total += this.props.dishPrice;
    var totalFixed2 = Number(total).toFixed(2);
    var orderInfo = {...this.props,'dishCount':dishCount, 'total':totalFixed2};
    this.props.callbackFromParent(orderInfo);
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
  callbackFromParent : propTypes.func.isRequired
};


export default Dish;
