const CartItem = ({ item, onRemoveItem, onQuantityChange }) => {
  const { image, name, sale_price } = item.product;
  const { quantity } = item;

  return (
    <div className="bg-gray-100 rounded-md shadow-sm p-4 flex items-center">
      <img className="w-20 h-20 object-cover mr-4" src={image} alt={name} />
      <div className="flex flex-col">
        <div className="text-black font-medium">{name}</div>
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <span>Qty: {quantity}</span>
          <button
            className="ml-4 px-2 py-1 bg-blue-500 hover:bg-blue-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => onRemoveItem(item)}
          >
            Remove
          </button>
        </div>
        <div className="flex items-center mt-4">
          <button
            className="px-2 py-1 border border-gray-300 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => onQuantityChange(item, quantity - 1)}
          >
            -
          </button>
          <span className="mx-2 text-black font-medium">{quantity}</span>
          <button
            className="px-2 py-1 border border-gray-300 hover:bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={() => onQuantityChange(item, quantity + 1)}
          >
            +
          </button>
          <span className="ml-4 text-black font-medium">Price: ${parseFloat(sale_price).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;