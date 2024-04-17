const CartLogic = ({ cartItems, onRemoveItem, onQuantityChange, subtotal, discount, shipping, tax, total }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-black font-medium">Shopping Cart</h2>
        <p className="text-gray-600 text-sm">You have {cartItems.length} items in your cart</p>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4">
        <div className="flex-grow">
          {cartItems.map((item) => (
            <CartItem
              key={item.id} // Replace with unique identifier for each item
              item={item}
              onRemoveItem={onRemoveItem}
              onQuantityChange={onQuantityChange}
            />
          ))}
        </div>
        <div className="w-full md:w-1/2 bg-gray-100 rounded-md p-4 mt-4 md:mt-0">
          <div className="text-black font-medium mb-4">Order Summary</div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 text-sm">Subtotal:</span>
            <span className="text-black font-medium">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 text-sm">Shipping Discount:</span>
            <span className="text-black font-medium">${discount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 text-sm">Shipping & Handling:</span>
            <span className="text-black font-medium">${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600 text-sm">Tax (18%):</span>
            <span className="text-black font-medium">${tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center text-black font-medium mt-4">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="w-full bg-yellow-500 hover:bg-yellow-700 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartLogic;