import { useState } from 'react';
import ProductsList from './ProductsList';

const ProductsLogic = ({ products, categories, addToCart }) => {
    const [categorySelected, setCategorySelected] = useState("all");
  
    const productosFiltrados = () => {
      if (categorySelected === "all") {
        return products;
      } else {
        return products.filter((product) => product.category === categorySelected);
      }
    };
  
    return (
      <div className="products_logic">
        <select
          value={categorySelected}
          onChange={(e) => setCategorySelected(e.target.value)}
        >
          <option value="all">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <ProductsList products={productosFiltrados()} addToCart={addToCart} />
      </div>
    );
  };

  export default ProductsLogic;