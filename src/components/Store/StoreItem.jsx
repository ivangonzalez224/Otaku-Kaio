import PropTypes from 'prop-types';
import React from 'react';

const StoreItem = ({ image, name, originalPrice, salePrice }) => {
  return (
    <div className="flex flex-col justify-end rounded-lg bg-white border border-blue-500 p-2">
      <img src={image} alt={name} className="mx-auto" />
      <h3 className="font-bold text-left mb-2">{name}</h3>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500 line-through">$ {originalPrice}</span>
        <span className="text-red-500 font-bold">$ {salePrice}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          // onClick={onDetailsClick}
        >
          Details
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md ml-4"
          // onClick={onCartClick}
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
          </svg>
        </button>
      </div>
    </div>
  );
};

StoreItem.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    originalPrice: PropTypes.string.isRequired,
    salePrice: PropTypes.string.isRequired,
  };
export default StoreItem;