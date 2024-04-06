import PropTypes from 'prop-types';
import React, { useState } from 'react';
import StoreItem from './StoreItem';
import '../../App.css';

const StoreList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('Clothes');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <div className="flex justify-start mb-6">
        <button
          className={`bg-white-500 text-[15px] text-blue border border-blue-500 py-1 px-3 rounded-md focus:outline-none mr-4 ${
            selectedCategory === 'Clothes' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleCategoryClick('Clothes')}
        >
          Clothes
        </button>
        <button
          className={`bg-white-500 text-[15px] text-blue border border-blue-500 focus:outline-none py-1 px-3 rounded-md mr-4 ${
            selectedCategory === 'Animes' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleCategoryClick('Animes')}
        >
          Animes
        </button>
        <button
          className={`bg-white-500 text-[15px] text-blue border border-blue-500 focus:outline-none py-1 px-3 rounded-md mr-4 ${
            selectedCategory === 'Cups' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleCategoryClick('Cups')}
        >
          Cups
        </button>
        <button
          className={`bg-white-500 text-[15px] text-blue border border-blue-500 focus:outline-none py-1 px-3 rounded-md mr-4 ${
            selectedCategory === 'Games' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleCategoryClick('Games')}
        >
          Games
        </button>
        <button
          className={`bg-white-500 text-[15px] text-blue border border-blue-500 focus:outline-none py-1 px-3 rounded-md ${
            selectedCategory === 'Doll' ? 'bg-blue-500 text-white' : ''
          }`}
          onClick={() => handleCategoryClick('Doll')}
        >
          Dolls
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <StoreItem
            key={product.id}
            productid={product.id}
            image={product.image}
            name={product.name}
            originalPrice={product.ori_price}
            salePrice={product.sale_price}
          />
        ))}
      </div>
    </div>
  );
};

StoreList.propTypes = {
  products: PropTypes.array.isRequired,
};

export default StoreList;