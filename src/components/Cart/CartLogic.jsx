import { useState } from 'react';
import CartItem from './CartItem';
import { FaRegCreditCard } from "react-icons/fa6";

const CartLogic = ({ cartItems, onRemoveItem, onQuantityChange, subtotal, discount, shipping, tax, total }) => {
  const [cardholderName, setCardholderName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = () => {
    console.log('Procesando pago...');
  };

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
              key={item.id}
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

          <div className="border border-gray-300 bg-white rounded-md p-4 mt-4">
            {/* Credit Card Heading */}
            <div className="flex items-center border border-blue-500 text-blue-500 font-medium text-left p-2 mb-4 rounded-md">
              <FaRegCreditCard className="mr-4"/>
              Credit card
            </div>

            {/* Credit card form */}
            <div>
              <div className="mb-4">
                <label htmlFor="cardholderName" className="block text-left text-sm font-medium text-gray-700">
                  Cardholder's Name
                </label>
                <input
                  type="text"
                  id="cardholderName"
                  className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={cardholderName}
                  onChange={(e) => setCardholderName(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-left text-sm font-medium text-gray-700">
                  Card Number
                </label>
                <input
                  type="text"
                  id="cardNumber"
                  className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label htmlFor="expiry" className="block text-left text-sm font-medium text-gray-700">
                  Expiry Date
                </label>
                <input
                  type="text"
                  id="expiry"
                  className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                />
              </div>

              <div className="mb-4">
                <label htmlFor="cvc" className="block text-left text-sm font-medium text-gray-700">
                  CVC
                </label>
                <input
                  type="text"
                  id="cvc"
                  className="mt-1 block w-full p-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  value={cvc}
                  onChange={(e) => setCvc(e.target.value)}
                />
              </div>
            </div>
            <button
            className="w-full bg-yellow-500 mt-8 hover:bg-yellow-700 text-white py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
            onClick={handlePayment}
          >
            Pay Now
          </button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default CartLogic;