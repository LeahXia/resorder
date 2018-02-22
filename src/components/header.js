import React from 'react';
import propTypes from 'prop-types';

const Header = (props) => {
  return (
    <div>
      <h2 className="text-center" style={{color:'#999'}}>
        {props.headerMessage}
      </h2>
      <h1 className="text-center" style={{color:'#555'}}>
        Little Buddle Restaurant
      </h1>
    </div>
  );
};

Header.propTypes = {
  headerMessage: propTypes.string.isRequired
};

Header.defaultProps = {
  headerMessage: 'ResOrder'
};

export default Header;
