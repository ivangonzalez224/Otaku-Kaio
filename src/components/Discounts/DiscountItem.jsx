import React from 'react';
import PropTypes from 'prop-types';

const DiscountItem = ({ name, image, current_price, offer_price, normal_price, percentage }) => {
  return (
    <div className="bg-white rounded-md p-4 flex flex-col md:flex-row items-center">
      <div className="flex-1 text-left">
        <h6 className="text-lg font-medium text-gray-700">{name}</h6>
        <p className="text-gray-500 line-through">{normal_price}</p>
        <p className="text-green-500 font-bold">{current_price}</p>
        <p className="text-red-500 font-bold">{offer_price}</p>
      </div>
      <div className="flex-1 text-right">
        <p className="text-red-500 font-bold">{percentage}%</p>
        <img src={image} alt={name} className="w-24 h-24 object-cover mx-auto md:ml-auto md:mr-0" />
      </div>
    </div>
  );
};

DiscountItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  current_price: PropTypes.number.isRequired,
  offer_price: PropTypes.number.isRequired,
  normal_price: PropTypes.number.isRequired,
  percentage: PropTypes.string.isRequired,
};

export default DiscountItem;