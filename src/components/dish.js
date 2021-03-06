import React, { Component} from 'react';
import propTypes from 'prop-types';

class Dish extends Component {

  handleClick = () => {

    var dishID = this.props._id;
    this.props.onClick(dishID);

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
  _id : propTypes.string.isRequired,
  onClick : propTypes.func.isRequired
};


export default Dish;
