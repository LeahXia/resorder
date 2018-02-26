import React from 'react';
import propTypes from 'prop-types';
import OrderItem from './orderItem';


class OrderDetail extends React.Component {

  render (){
    return(
      <div id="orderDetail" style={{ display: (this.props.orderVisible ? 'block' : 'none') }}>
        <h2>Your Order</h2>
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
  orderVisible: propTypes.bool.isRequired
};



export default OrderDetail;
