import React from 'react';
import { useState } from 'react';

const DetailsItem = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="flex flex-col items-center justify-center w-100vw bg-gray mx-auto py-2">
      <div className="bg-white rounded-lg shadow-md w-100">
        <button className="absolute top-2 right-2 focus:outline-none text-white hover:bg-red-500 bg-red-700 rounded-full px-2 py-1" onClick={() => window.history.back()}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7v14z" />
          </svg>
        </button>
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
              <div className="flex flex-col items-start mb-8">
                <span className="font-medium text-blue-500">Pick your size:</span>
                <div className="flex space-x-2 mt-2">
                  <button
                    className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-md ${
                      selectedSize === 'XS' ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => handleSizeClick('XS')}
                  >
                    XS
                  </button>
                  <button
                    className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-md ${
                      selectedSize === 'S' ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => handleSizeClick('S')}
                  >
                    S
                  </button>
                  <button
                    className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-md ${
                      selectedSize === 'M' ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => handleSizeClick('M')}
                  >
                    M
                  </button>
                  <button
                    className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-md ${
                      selectedSize === 'L' ? 'bg-blue-500 text-white' : ''
                    }`}
                    onClick={() => handleSizeClick('L')}
                  >
                    L
                  </button>
                </div>
              </div>
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