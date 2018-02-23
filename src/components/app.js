import React from 'react';
import Header from './header';
import Menu from './menu';
import OrderPreview from './orderPreview';
import propTypes from 'prop-types';


class App extends React.Component {

  appOrderData = (orderInfo) => {
    this.setState({orderInfo:orderInfo});
  };

  state = {
    orderInfo: {}
  };

  render(){
    return (
      <div id="app">
        <Header />
        <Menu initialDishes={this.props.initialDishes} callbackFromParent={this.appOrderData} />
        <OrderPreview orderInfo={this.state.orderInfo}/>
      </div>
    );
  }
}

App.propTypes = {
  initialDishes : propTypes.array.isRequired,
};

export default App;
