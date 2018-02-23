import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';




ReactDOM.hydrate(
  <App initialDishes={ window.initialData.dishes} />,
  document.getElementById('root')
);
