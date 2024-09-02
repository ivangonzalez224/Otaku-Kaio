import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import CartLogic from '../Cart/CartLogic';
import FooterLogic from '../Footer/FooterLogic';

const Cart = () => {
  const user = useSelector((state) => state.user.userInfo);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Fetch items from the cart
  useEffect(() => {
    const fetchCartItems = async () => {
      if (!user) return;
      try {
        setLoading(true);
        setError(null);
        const userId = user.data.id;
        const response = await fetch(`http://127.0.0.1:3000/api/v1/carts?user_id=${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch cart items');
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [user]);

	const handleRemoveItem = async (item) => {
      try {
        const response = await fetch(`http://127.0.0.1:3000/api/v1/carts/${item.id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to remove item from cart');
      }

      // Remove the item from local state if API call is successful
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== item.id)
      );
    } catch (err) {
        console.error(err.message);
        setError(err.message);
      }
    };

    const handleQuantityChange = async (item, newQuantity) => {
      if (newQuantity < 1) return;

      try {
      	const response = await fetch(`http://127.0.0.1:3000/api/v1/carts/${item.id}`, {
          method: 'PATCH', // Update the quantity
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ quantity: newQuantity }),
        });

        if (!response.ok) {
          throw new Error('Failed to update item quantity');
        }

      // Update the item quantity in local state if API call is successful
        setProducts((prevProducts) =>
          prevProducts.map((product) =>
            product.id === item.id ? { ...product, quantity: newQuantity } : product
          )
        );
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      }
    };

    const calculateSubtotal = () => {
      return products.reduce((acc, product) => acc + parseFloat(product.product.sale_price) * product.quantity, 0);
    };

    const calculateDiscount = () => {
      return 0;
    };

    const calculateShipping = () => {
      return 5;
    };

    const calculateTax = (subtotal) => {
      const taxRate = 0.18;
      return subtotal * taxRate;
    };

    const subtotal = calculateSubtotal();
    const discount = calculateDiscount();
    const shipping = calculateShipping();
    const tax = calculateTax(subtotal);
    const total = subtotal + shipping + tax - discount;

    return (
      <div className="main_cart flex flex-col items-center justify-center w-full bg-gray mx-auto py-2 box-border">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-red-500">{error}</div>
        ) : (
          <div className="w-[80%] max-w-[768px] bg-white rounded-md shadow-md p-4">
            <CartLogic
              cartItems={products}
              onRemoveItem={handleRemoveItem}
              onQuantityChange={handleQuantityChange}
              subtotal={subtotal}
              discount={discount}
              shipping={shipping}
              tax={tax}
              total={total}
            />
          </div>
        )}
        <FooterLogic />
      </div>
    );
  };

export default Cart;