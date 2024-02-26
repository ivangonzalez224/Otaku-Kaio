import { useState } from 'react';
import ProductsList from './ProductsList';

const ProductsLogic = ({ addToCart }) => {
    const [categorySelected, setCategorySelected] = useState('');
    const totalProducts = [];

    const filterProducts = (totalProducts, categorySelected) => {
        if (!categorySelected) {
            return totalProducts; // return all products
        }

        return totalProducts.filter((product) => product.category === categorySelected);
    };

    const handleCategoryChange = (category) => {
        setCategorySelected(category);
    };

    const categories = [...new Set(totalProducts.map((product) => product.category))]; // get unique categories

    const categoryButtons = categories.map((category) => (
        <button
            key={category}
            className={`w-full py-2 text-md font-medium ${
                category === categorySelected ? 'bg-blue-500 text-white' : 'text-gray-700'
            }`}
            onClick={() => handleCategoryChange(category)}
        >
            {category}
        </button>
    ));

    return (
        <div className="products_logic">
            <div className="filter-buttons flex flex-wrap gap-2 mb-4">
                {categoryButtons}
            </div>
            <ProductsList products={filterProducts(totalProducts, categorySelected)} addToCart={addToCart} />
        </div>
    );
};

export default ProductsLogic;