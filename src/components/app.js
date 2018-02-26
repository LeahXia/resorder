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
    pageHeader : 'Little Buddy Restaurant',
    dishesOrdered:dishesOrdered,
    orderInfo: {'dishCount':0, 'total':0, 'dishID':0}
  };

  //when dish clicked, get order data and dishID of that dish from dish.js
  appOrderData = (orderInfo) => {
    var dishID = orderInfo.dishID;
    var clickedDish = this.state.dishes[dishID];
    dishesOrdered[dishID] = clickedDish;
    this.setState({
      currentDishID: dishID,
      dishesOrdered: dishesOrdered,
      orderInfo:orderInfo
    });
  };

  viewOrderDetail = () => {
    document.getElementById('OrderDetail').classList.toggle('d-none');
  }

  render(){
    return (
      <div id="app">
        <Header />
        <Menu
          initialDishes={this.state.dishes}
          onDishClick={this.appOrderData}
        />
        <OrderPreview orderInfo={this.state.orderInfo}/>
        <OrderDetail dishesOrdered={this.state.dishesOrdered}/>
      </div>
    );
  }
}

App.propTypes = {
  initialDishes : propTypes.object.isRequired,
};

export default App;
