import React from 'react';
import PropTypes from 'prop-types';

const DiscountItem = ({ name, image, current_price, offer_price, normal_price, percentage }) => {
  return (
    <div className="bg-white rounded-md p-4 flex flex-col md:flex-col items-center">
      <h6 className="text-lg font-medium text-gray-700">{name}</h6>
      <div className="flex flex-row md:flex-col justify-between h-full w-full">
        <div className="flex-1 md:w-3/10 flex flex-col justify-end content-between text-left md:mr-4">
          <p className="text-gray-500 line-through">${normal_price}</p>
          <p className="text-green-500 line-through font-bold">${current_price}</p>
          <p className="text-red-500 font-bold">${offer_price}</p>
        </div>
        <div className="flex-1 md:w-7/10 text-right">
          <p className="text-red-500 font-bold">-{percentage}%</p>
          <div className="w-36 h-36 mx-auto md:ml-auto md:mr-0">
            <img src={image} alt={name} className="w-full h-full object-cover rounded-[24px]" />
          </div>
        </div>
      </div>  
    </div>
  );
};

DiscountItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  current_price: PropTypes.string.isRequired,
  offer_price: PropTypes.string.isRequired,
  normal_price: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default DiscountItem;