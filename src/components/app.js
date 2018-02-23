import React from 'react';
import Header from './header';
import Menu from './menu';
import propTypes from 'prop-types';


const App = (props) => {

  return (
    <div id="app">
      <Header />
      <Menu initialDishes={props.initialDishes} />
    </div>
  );
};

App.propTypes = {
  initialDishes : propTypes.array.isRequired,
};

export default App;
