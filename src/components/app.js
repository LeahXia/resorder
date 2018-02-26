import React from 'react';
import Header from './header';
import Menu from './menu';
import OrderPreview from './orderPreview';
import OrderDetail from './OrderDetail';
import propTypes from 'prop-types';

var dishesOrdered = {};

class App extends React.Component {

  state = {
    dishes : this.props.initialDishes,
    orderInfo: {'dishCount':0, 'total':0, 'dishID':0},
    dishesOrdered:dishesOrdered,
    orderVisible:false
  };

  //when dish clicked, get order data and dishID of that dish from dish.js
  onAddToOrderClick = (dishID) => {
    var clickedDish = this.state.dishes[dishID];

    var dishCount = this.state.orderInfo['dishCount'] + 1;
    var total = Number(this.state.orderInfo['total']) + clickedDish.dishPrice;
    var totalFixed2 = Number(total).toFixed(2);

    var quantity = 1;

    if (dishesOrdered[dishID]) {
      quantity = clickedDish.quantity + 1;
    }

    dishesOrdered[dishID] = clickedDish;
    dishesOrdered[dishID].quantity = quantity;

    this.setState({
      dishesOrdered: dishesOrdered,
      orderInfo:{'dishCount':dishCount, 'total':totalFixed2, 'dishID':dishID}
    });
  };

  onDeleteDishClick = (dishID, deleteAmount) => {
    var clickedDish = this.state.dishes[dishID];

    var quantity = 1;
    if (deleteAmount === 'all'){
      delete dishesOrdered[dishID];
      quantity = clickedDish['quantity'];
    }

    var dishCount = this.state.orderInfo['dishCount'] - quantity;
    var total = Number(this.state.orderInfo['total']) - clickedDish.dishPrice * quantity ;
    var totalFixed2 = Number(total).toFixed(2);

    if (deleteAmount === 'one'){
      dishesOrdered[dishID].quantity -= 1;
    }

    this.setState({
      dishesOrdered:dishesOrdered,
      orderInfo:{'dishCount':dishCount, 'total':totalFixed2, 'dishID':dishID}
    });
  };

  viewOrderDetail = (orderVisible) => {
    this.setState({
      orderVisible:orderVisible
    });
  };

  render(){
    return (
      <div id="app">
        <Header />
        <Menu
          initialDishes={this.state.dishes}
          onDishClick={this.onAddToOrderClick}
        />
        <OrderPreview
          orderInfo={this.state.orderInfo}
          viewOrderDetail={this.viewOrderDetail}
        />
        <OrderDetail
          dishesOrdered={this.state.dishesOrdered}
          onAddOneClick={this.onAddToOrderClick}
          onDeleteDishClick={this.onDeleteDishClick}
          orderVisible={this.state.orderVisible}
        />
      </div>
    );
  }
}


App.propTypes = {
  initialDishes : propTypes.object.isRequired,
};

export default App;
