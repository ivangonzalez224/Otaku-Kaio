import PropTypes from 'prop-types';
import React, { useState } from 'react';
import StoreItem from './StoreItem';

const StoreList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('Clothes'); // Initial selected category

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md mr-2 ${
            selectedCategory === 'Clothes' ? 'bg-white border border-blue-500' : ''
          }`}
          onClick={() => handleCategoryClick('Clothes')}
        >
          Clothes
        </button>
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md mr-2 ${
            selectedCategory === 'Animes' ? 'bg-white border border-blue-500' : ''
          }`}
          onClick={() => handleCategoryClick('Animes')}
        >
          Animes
        </button>
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md mr-2 ${
            selectedCategory === 'Cups' ? 'bg-white border border-blue-500' : ''
          }`}
          onClick={() => handleCategoryClick('Cups')}
        >
          Cups
        </button>
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md mr-2 ${
            selectedCategory === 'Games' ? 'bg-white border border-blue-500' : ''
          }`}
          onClick={() => handleCategoryClick('Games')}
        >
          Games
        </button>
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md ${
            selectedCategory === 'Doll' ? 'bg-white border border-blue-500' : ''
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