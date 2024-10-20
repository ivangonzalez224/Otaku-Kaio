import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbShoppingCartFilled } from "react-icons/tb";

const StoreItem = ({ productid, image, name, originalPrice, salePrice }) => {
  const navigate = useNavigate();
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleDetailsClick = (product) => {
    setSelectedProduct(product);
    setShowDetails(true);
  };
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
          onClick={() => navigate(`/store/details/${productid}`)}
        >
          Details
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