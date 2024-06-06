import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import StoreItem from './StoreItem';
import '../../App.css';

const StoreList = ({ products, initialCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    setSelectedCategory(initialCategory);
  }, [initialCategory]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => product.category === selectedCategory);

  return (
    <div>
      <div className="flex justify-start mb-6">
        {['Clothes', 'Mangas', 'Mugs', 'Games', 'Dolls'].map((category) => (
          <button
            key={category}
            className={`bg-white-500 text-[15px] text-blue border border-blue-500 py-1 px-3 rounded-md focus:outline-none mr-4 ${
              selectedCategory === category ? 'bg-blue-500 text-white' : ''
            }`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
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
  initialCategory: PropTypes.string.isRequired,
};

export default StoreList;