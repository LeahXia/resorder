import React from 'react';
import propTypes from 'prop-types';

let orderVisible = false;

class OrderPreview extends React.Component {

  handelViewOrderClicked = () => {
    orderVisible =  !orderVisible;
    this.props.viewOrderDetail(orderVisible);
  };

  handelSubmitClicked = () => {

  };

  render (){
    return(
      <div className="col-sm-12" id="orderPreview">
        <h3 className="col-sm-4">Dish ordered: {this.props.orderInfo.dishCount}</h3>
        <h3 className="col-sm-4" id="total">Total: {this.props.orderInfo.total}</h3>
        <button className="col-sm-2 btn btn-primary" id="viewOrder" onClick={this.handelViewOrderClicked}>View Order</button>
        <button className="col-sm-2 btn btn-primary" id="submitOrder" onClick={this.handelSubmitClicked}>Submit Order</button>
      </div>
    );
  }
}

OrderPreview.propTypes = {
  orderInfo : propTypes.object,
  dishCount : propTypes.number,
  total : propTypes.number,
  viewOrderDetail : propTypes.func.isRequired
};



export default OrderPreview;
