import React from 'react';
import { useState } from 'react';

const DetailsItem = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const showSizeButtons =
    product[0].category === 'Cups' ||
    product[0].category === 'Clothes' ||
    product[0].category === 'Doll';

  const allowedSizes =
    product[0].category === 'Cups' || product[0].category === 'Doll'
      ? ['S', 'M']
      : ['XS', 'S', 'M', 'L'];

  const sizeSelectionText =
    product[0].category === 'Doll' || product[0].category === 'Cups'
      ? 'Pick the size:'
      : 'Pick your size:';    

  return (
    <div className="flex flex-col items-center justify-center w-100vw bg-gray mx-auto py-2">
      <div className="bg-white rounded-lg shadow-md w-100">
        <div className="flex items-center pl-2 pt-2"> 
          <button className="text-gray-500 bg-white hover:underline focus:outline-none" onClick={() => window.history.back()}>
            Store 
          </button>
          <span className="text-gray-500 mx-1">&gt;</span>
          <span className="text-gray-500 underline">
            {product[0].category}
          </span>
        </div>
        <div className="flex flex-col p-4">
          <div className="flex items-center mb-4">
            <img src={product[0].image} alt={product.name} className="w-80 object-cover rounded-lg mr-8" />
            <div className="flex flex-col">
              <h6 className="text-2xl font-bold mb-2">{product[0].name}</h6>
              <div className="flex items-start mb-4">
                <span className="text-gray-400 mr-4">List Price:</span>
                <span className="text-gray-700 font-semibold">$ {product[0].ori_price}</span>
              </div>
              <div className="flex items-start mb-4">
                <span className="text-gray-400 mr-4">Selling Price:</span>
                <span className="text-green-500 font-semibold">$ {product[0].sale_price}</span>
              </div>
              <div className="flex items-start mb-4">
                <span className="text-gray-400 mr-4">COLOR:</span>
                <span className="text-gray-700">{product[0].color}</span>
              </div>
              {showSizeButtons && (
                <div className="flex flex-col items-start mb-8">
                  <span className="font-medium text-blue-500">{sizeSelectionText}</span>
                  <div className="flex space-x-2 mt-2">
                    {allowedSizes.map((size) => (
                      <button
                        key={size}
                        className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-md ${
                          selectedSize === size ? 'bg-blue-500 text-white' : ''
                        }`}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-auto">
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsItem;