import React from 'react';
import Header from './header';
import Menu from './menu';
import OrderPreview from './orderPreview';
import propTypes from 'prop-types';

class App extends React.Component {

  state = {
    dishes : this.props.initialDishes,
    pageHeader : 'Little Buddy Restaurant',
    orderInfo: {'dishCount':0, 'total':0, 'dishID':0}
  };

  //when dish clicked, get order data and dishID of that dish from dish.js
  appOrderData = (orderInfo) => {
    var dishID = orderInfo.dishID;
    this.setState({
      currentDishID: dishID,
      orderInfo:orderInfo
    });
  };

  render(){
    return (
      <div id="app">
        <Header />
        <Menu
          initialDishes={this.state.dishes}
          onDishClick={this.appOrderData}
        />;
        <OrderPreview orderInfo={this.state.orderInfo}/>
      </div>
    );
  }
}

App.propTypes = {
  initialDishes : propTypes.object.isRequired,
};

export default App;
