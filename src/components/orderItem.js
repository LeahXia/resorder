import React from 'react';
import propTypes from 'prop-types';


class OrderItem extends React.Component {

  // state = {
  //   dishes: this.props.initialDishes
  // };

  handleClick = () => {
    this.props.onClick(this.props.dishOrdered.id);
  }

  render (){
    return(
      <div className="orderItem col-sm-12">
        <h3 className="col-sm-4" id="dishName">{this.props.dishOrdered.dishName}</h3>
        <h3 className="col-sm-4" id="dishPrice">{this.props.dishOrdered.dishPrice}</h3>
        <button className="col-sm-2 btn btn-danger deleteItem" onClick={this.handleClick}>Delete</button>
      </div>
    );
  }
}
//
OrderItem.propTypes = {
  dishOrdered: propTypes.object.isRequired,
  onClick: propTypes.func.isRequired
};



export default OrderItem;
