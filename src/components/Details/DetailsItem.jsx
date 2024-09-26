import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const DetailsItem = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  // get user userInfo
  const user = useSelector((state) => state.user.userInfo);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const handleAddToCart = async (event) => {
    event.preventDefault();
    if (!user) {
      console.log("User not logged in");
      return;
    }
    // Data to send to backend
    const cartData = {
      quantity: quantity,
      size: selectedSize,
      user_id: user.data.id,
      product_id: product[0].id,
    };

    try {
      // POST to backend to add the product to the cart
      const response = await fetch('https://otakuside.onrender.com/api/v1/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cart: cartData }),
      });

      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }

      const data = await response.json();
      // Show confirmation message
      setConfirmationVisible(true);
      setTimeout(() => setConfirmationVisible(false), 3000);
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  const showSizeButtons =
    product[0].category === 'Cups' ||
    product[0].category === 'Clothes' ||
    product[0].category === 'Doll';

  const allowedSizes =
    product[0].category === 'Cups' || product[0].category === 'Doll'
      ? ['S', 'M']
      : ['XS', 'S', 'M', 'L'];

  const sizeSelectionText =
    product[0].category === 'Doll' || product[0].category === 'Cups'
      ? 'Pick the size:'
      : 'Pick your size:';

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 py-4 mx-auto">
      <div className="flex flex-col items-center justify-center bg-white rounded-lg w-full box-border p-4 md:p-6 lg:p-8">
        <div className="flex w-full pl-2 justify-start items-center pt-2 mb-4"> 
          <button className="text-gray-500 bg-white hover:underline focus:outline-none" onClick={() => window.history.back()}>
            Store 
          </button>
          <span className="text-gray-500 mx-1">&gt;</span>
          <span className="text-gray-500 underline">
            {product[0].category}
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-start p-2 md:p-4 lg:p-6 w-full">
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <img
              src={product[0].image}
              alt={product[0].name}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
            <div className="flex flex-col w-full md:w-1/2 md:ml-4">
              <h6 className="text-xl md:text-2xl font-bold mb-2">{product[0].name}</h6>
              <div className="flex flex-col w-4/5 mx-auto md:w-full mb-4">
                <div className="flex items-start mb-2">
                  <span className="text-gray-400 mr-4 text-left">List Price:</span>
                  <span className="text-gray-700 font-semibold">$ {product[0].ori_price}</span>
                </div>
                <div className="flex items-start mb-2">
                  <span className="text-gray-400 mr-4 text-left">Selling Price:</span>
                  <span className="text-green-500 font-semibold">$ {product[0].sale_price}</span>
                </div>
                {(product[0].category === 'Clothes' || product[0].category === 'Cups') && (
                  <div className="flex items-start mb-2">
                    <span className="text-gray-400 mr-4 text-left">COLOR:</span>
                    <span className="text-gray-700">{product[0].color}</span>
                  </div>
                )}
              </div>
              {showSizeButtons && (
                <div className="flex flex-col items-start mb-4">
                  <span className="font-medium text-blue-500">{sizeSelectionText}</span>
                  <div className="flex flex-wrap space-x-2 mt-2">
                    {allowedSizes.map((size) => (
                      <button
                        key={size}
                        className={`bg-gray-200 text-gray-700 px-4 py-2 rounded-md ${
                          selectedSize === size ? 'bg-blue-500 text-white' : ''
                        }`}
                        onClick={() => handleSizeClick(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div className="flex flex-col w-4/5 mx-auto md:w-full mb-4 text-left">
                <label htmlFor="quantity" className="text-gray-400 mb-2">
                  Select the quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  className="w-full md:w-24 h-10 px-2 rounded-md border border-gray-300"
                  min="1"
                  max="10"
                  value={quantity}
                  onChange={handleQuantityChange}
                />
              </div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors duration-200"
                onClick={handleAddToCart}
              >
                ADD TO CART
              </button>
              {isConfirmationVisible && (
                <div className="mt-4 p-2 bg-yellow-400 text-yellow-700 rounded-md">
                  Product added to cart successfully!
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};

export default DetailsItem;