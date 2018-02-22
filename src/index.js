import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Menu from './components/menu';

import data from './menu-data';

// const App = (props) => {
//   return (
//     <h2 className="text-center" style={{color:color}}>
//       {props.headerMessage}
//     </h2>
//   );
// };

// App.propTypes = {
//   headerMessage: propTypes.string.isRequired
// };
//
// App.defaultProps = {
//   headerMessage: 'Hello!!'
// };

ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

ReactDOM.render(
  <Menu dishes={data.dishes} />,
  document.getElementById('menu')
);
