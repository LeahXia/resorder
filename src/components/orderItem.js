import React from 'react';
import propTypes from 'prop-types';


class OrderItem extends React.Component {

  // state = {
  //   dishes: this.props.initialDishes
  // };

  handleDeleteAll = () => {
    this.props.onDeleteDishClick(this.props.dishOrdered._id,'all');
  }

  handleAddOne = () => {
    this.props.onAddOneClick(this.props.dishOrdered._id);
  }

  handleDeleteOne = () => {
    this.props.onDeleteDishClick(this.props.dishOrdered._id,'one');
  }

  render (){
    return(
      <div className="orderItem col-sm-12">
        <h3 className="col-sm-4" id="dishName">{this.props.dishOrdered.dishName}</h3>
        <h3 className="col-sm-3" id="dishPrice">$ {this.props.dishOrdered.dishPrice}</h3>
        <button className="col-sm-1 btn btn-default minusOne" onClick={this.handleDeleteOne}> - </button>
        <h3 className="col-sm-1 quantity" >{this.props.dishOrdered.quantity}</h3>
        <button className="col-sm-1 btn btn-default addOne" onClick={this.handleAddOne}> + </button>
        <button className="col-sm-1 btn btn-danger deleteItem" onClick={this.handleDeleteAll}>Delete</button>
      </div>
    );
  }
}
//
OrderItem.propTypes = {
  dishOrdered: propTypes.object.isRequired,
  onDeleteDishClick: propTypes.func.isRequired,
  onAddOneClick: propTypes.func.isRequired
};



export default OrderItem;
