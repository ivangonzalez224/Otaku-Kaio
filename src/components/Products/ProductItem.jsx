const ProductItem = ({ product, addToCart }) => {
    const { id, image, name, prize } = product;
  
    return (
      <div className="product-item">
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <p>Prize: ${prize}</p>
        <button onClick={() => addToCart(id)}>Add to cart</button>
      </div>
    );
  };

  export default ProductItem;  