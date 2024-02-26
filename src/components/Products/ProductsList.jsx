import ProductItem from './ProductItem';

const ProductsList = ({ products, addToCart }) => {
    return (
      <div className="lista-productos">
        {products.map((product) => (
          <ProductItem key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    );
  };

export default ProductsList;  