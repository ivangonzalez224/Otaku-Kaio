import React, { useState } from 'react';

const StoreList = ({ products }) => {
  const [selectedCategory, setSelectedCategory] = useState('clothes'); // Initial selected category

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredProducts = products.filter((product) => product.cat === selectedCategory);

  return (
    <div>
      <div className="flex justify-center mb-4">
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md mr-2 ${
            selectedCategory === 'clothes' ? 'bg-white border border-blue-500' : ''
          }`}
          onClick={() => handleCategoryClick('clothes')}
        >
          Clothes
        </button>
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md mr-2 ${
            selectedCategory === 'animes' ? 'bg-white border border-blue-500' : ''
          }`}
          onClick={() => handleCategoryClick('animes')}
        >
          Animes
        </button>
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md mr-2 ${
            selectedCategory === 'cups' ? 'bg-white border border-blue-500' : ''
          }`}
          onClick={() => handleCategoryClick('cups')}
        >
          Cups
        </button>
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md mr-2 ${
            selectedCategory === 'games' ? 'bg-white border border-blue-500' : ''
          }`}
          onClick={() => handleCategoryClick('games')}
        >
          Games
        </button>
        <button
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded-md ${
            selectedCategory === 'dolls' ? 'bg-white border border-blue-500' : ''
          }`}
          onClick={() => handleCategoryClick('dolls')}
        >
          Dolls
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <StoreItem
            key={product.id} // Replace with unique identifier for each product
            image={product.image}
            name={product.name}
            originalPrice={product.originalPrice}
            salePrice={product.salePrice}
            onDetailsClick={() => /* Handle details click */}
            onCartClick={() => /* Handle cart click */}
          />
        ))}
      </div>
    </div>
  );
};

export default StoreList;