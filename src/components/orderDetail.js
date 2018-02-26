import React from 'react';
import propTypes from 'prop-types';
import OrderItem from './orderItem';


class OrderDetail extends React.Component {

  // state = {
  //   dishesOrdered: this.props.dishesOrdered
  // };

  // onDeleteClick = (dishID) => {
  //   delete this.state.dishesOrdered[dishID];
  //   this.setState({
  //     dishesOrdered:this.state.dishesOrdered
  //   });
  //
  //
  // }

  render (){
    return(
      <div id="orderDetail">
        <h2>Your Order: </h2>
        {Object.keys(this.props.dishesOrdered).map(dishID =>
          <OrderItem
            key={dishID}
            dishOrdered={this.props.dishesOrdered[dishID]}
            onAddOneClick={this.props.onAddOneClick}
            onDeleteDishClick={this.props.onDeleteDishClick}
          />
        )}
      </div>
    );
  }
}
//
OrderDetail.propTypes = {
  dishesOrdered : propTypes.object.isRequired,
  onDeleteDishClick: propTypes.func.isRequired,
  onAddOneClick: propTypes.func.isRequired,
};



export default OrderDetail;
