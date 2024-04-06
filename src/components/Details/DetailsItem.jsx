import React from 'react';

const DetailsItem = ({ product }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-md max-w-2xl">
        <button className="absolute top-2 right-2 focus:outline-none text-white hover:bg-red-500 bg-red-700 rounded-full px-2 py-1" onClick={() => window.history.back()}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7 7-7v14z" />
          </svg>
        </button>
        <div className="flex items-center space-x-4 p-4">
          <img src={product.image} alt={product.name} className="w-64 h-64 object-cover rounded-lg" />
          <div>
            <h2 className="text-2xl font-bold mb-2">{product.name}</h2>

            <div className="flex items-center mb-4">
              <span className="text-gray-400 mr-4">List Price:</span>
              <span className="text-gray-700 font-semibold">${product.listPrice}</span>
            </div>

            <div className="flex items-center mb-4">
              <span className="text-gray-400 mr-4">Selling Price:</span>
              <span className="text-green-500 font-semibold">${product.sellingPrice}</span>
            </div>

            <div className="flex items-start mb-4">
              <span className="text-gray-400 mr-4">COLOR:</span>
              <span className="text-gray-700">{product.color}</span>
            </div>

            <div className="mb-4">
              <span className="font-medium">Pick your size:</span>
              <div className="flex space-x-2 mt-2">
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">XS</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">S</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">M</button>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">L</button>
              </div>
            </div>

            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsItem;