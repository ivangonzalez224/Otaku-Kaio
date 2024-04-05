import PropTypes from 'prop-types';
import React from 'react';
import { TbShoppingCartFilled } from "react-icons/tb";

const StoreItem = ({ image, name, originalPrice, salePrice }) => {
  return (
    <div className="flex flex-col justify-end rounded-lg bg-white border border-blue-500 p-2">
      <img src={image} alt={name} className="mx-auto" />
      <h3 className="text-left my-2">{name}</h3>
      <div className="flex justify-start text-sm">
        <span className="text-gray-500 line-through mr-6">$ {originalPrice}</span>
        <span className="text-red-500 font-bold text-[17px]">$ {salePrice}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-[15px] focus:outline-none text-white  py-2 px-4 rounded-md"
          // onClick={onDetailsClick}
        >
          Details
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 focus:outline-none text-white font-bold py-2 px-4 rounded-md ml-4"
          // onClick={onCartClick}
        >
          <TbShoppingCartFilled />
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