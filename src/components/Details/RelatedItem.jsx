import React from 'react';
import PropTypes from 'prop-types';

const RelatedItem = ({ image, name, priceList, sellingPrice }) => {
  
  return (
    <div className="bg-white rounded-md p-4 box-border">
      <img src={image} alt={name} className="mb-2" />
      <h6 className="text-sm text-gray-500 text-lg font-medium text-left">{name}</h6>
      <p className="text-sm text-gray-400 line-through text-left">{priceList}</p>
      <p className="text-green-500 text-left">${sellingPrice}</p>
    </div>
  );
};

RelatedItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  priceList: PropTypes.string.isRequired,
  sellingPrice: PropTypes.string.isRequired,
};

export default RelatedItem;