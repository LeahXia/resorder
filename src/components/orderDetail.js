import React from 'react';
import propTypes from 'prop-types';
import OrderItem from './orderItem';


class OrderDetail extends React.Component {

  state = {
    dishesOrdered: this.props.dishesOrdered
  };

  onDeleteClick = (dishID) => {
    // const index = this.props.dishesOrdered.indexOf(dishID);
    console.log(this.state.dishesOrdered);
    // this.state.dishesOrdered.splice(index, 1);
    delete this.state.dishesOrdered[dishID];
    console.log(this.state.dishesOrdered);
    this.setState({
      dishesOrdered:this.state.dishesOrdered
    });


  }

  render (){
    return(
      <div id="orderDetail">
        <h2>Your Order: </h2>
        {Object.keys(this.state.dishesOrdered).map(dishID =>
          <OrderItem
            key={dishID}
            dishOrdered={this.state.dishesOrdered[dishID]}
            onClick={this.onDeleteClick}
          />
        )}
      </div>
    );
  }
}
//
OrderDetail.propTypes = {
  dishesOrdered : propTypes.object
};



export default OrderDetail;
