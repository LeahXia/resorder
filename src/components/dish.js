import React, { Component} from 'react';
import propTypes from 'prop-types';
// import * as api from '../api';




// var dishCount = 0;
// var total = 0;
var orderStamp;

class Dish extends Component {

  handleClick = () => {
    //send back dishCount and total data and passdown to orderPreview
    // dishCount += 1;
    // total += this.props.dishPrice;
    // var totalFixed2 = Number(total).toFixed(2);
    // var orderInfo = {'dishCount':dishCount, 'total':totalFixed2, 'dishID':this.props.id};
    var dishID = this.props.id;
    this.props.onClick(dishID);

    if (!orderStamp) {
      orderStamp = new Date().getTime();
    }

    console.log(orderStamp);
    // var output = {orderStamp:this.props};
    // api.addOrder(orderStamp,this.props);
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
