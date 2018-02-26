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
    dishesOrdered:dishesOrdered
  };

  //when dish clicked, get order data and dishID of that dish from dish.js
  onAddToOrderClick = (dishID) => {
    var clickedDish = this.state.dishes[dishID];

    var dishCount = this.state.orderInfo['dishCount'] + 1;
    var total = Number(this.state.orderInfo['total']) + clickedDish.dishPrice;
    var totalFixed2 = Number(total).toFixed(2);

    var quantity = 1;
    console.log(`before : ${dishesOrdered[dishID]}`);

    if (dishesOrdered[dishID]) {
      quantity = clickedDish.quantity + 1;
      console.log(`after+1: ${quantity}`);
    }

    dishesOrdered[dishID] = clickedDish;
    dishesOrdered[dishID].quantity = quantity;
    console.log(`dishesOrdered[dishID] : ${dishesOrdered[dishID].dishName}`);
    console.log(`dishesOrdered[dishID] : ${dishesOrdered[dishID].quantity}`);


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

    console.log('tap delete ');
  };

  viewOrderDetail = () => {
    document.getElementById('OrderDetail').classList.toggle('d-none');
  };

  render(){
    return (
      <div id="app">
        <Header />
        <Menu
          initialDishes={this.state.dishes}
          onDishClick={this.onAddToOrderClick}
        />
        <OrderPreview orderInfo={this.state.orderInfo}/>
        <OrderDetail
          dishesOrdered={this.state.dishesOrdered}
          onAddOneClick={this.onAddToOrderClick}
          onDeleteDishClick={this.onDeleteDishClick}
        />
      </div>
    );
  }
}


App.propTypes = {
  initialDishes : propTypes.object.isRequired,
};

export default App;
