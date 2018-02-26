import React from 'react';
import propTypes from 'prop-types';

class DishDetail extends React.Component {

  render (){
    return(
      <div className="dishDetail">
        {this.props.dishName}
      </div>
    );
  }
}

DishDetail.propTypes = {
  dishName: propTypes.string.isRequired,
};

export default DishDetail;
