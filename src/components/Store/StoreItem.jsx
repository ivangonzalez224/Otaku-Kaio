import React from 'react';

const StoreItem = ({ image, name, originalPrice, salePrice, onDetailsClick, onCartClick }) => {
  return (
    <div className="rounded-lg bg-white border border-blue-500 p-4">
      <img src={image} alt={name} className="mx-auto" />
      <h3 className="font-bold text-left mb-2">{name}</h3>
      <div className="flex justify-between text-sm">
        <span className="text-gray-500 line-through">{originalPrice}</span>
        <span className="text-red-500 font-bold">{salePrice}</span>
      </div>
      <div className="flex justify-center items-center mt-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
          onClick={onDetailsClick}
        >
          Details
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md ml-4"
          onClick={onCartClick}
        >
          <svg className="fill-current h-6 w-6" viewBox="0 0 24 24">
            <path d="M7 18c-1.1 0-2-.9-2-2s1-2 2-2 2 .9 2 2-1 2-2 2zM18 1.l-8 5-8-5v14.h16l-8-5zM12 8c-1.1 0-2-.9-2-2s1-2 2-2 2 .9 2 2-1 2-2 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StoreItem;