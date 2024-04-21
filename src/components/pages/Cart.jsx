import CartLogic from '../Cart/CartLogic';
import FooterLogic from '../Footer/FooterLogic';

const Cart = () => {
  const products = [
	  {
	    id: 1,
	    image: "https://res.cloudinary.com/dv1mouzbi/image/upload/v1712691767/devSources/cupDrStoneWhiStoe_uhlfwh.png",
	    name: "Dr. Stone Cup",
	    price: 15.90,
	    quantity: 1,
	  },
	  {
	    id: 2,
	    image: "https://res.cloudinary.com/dv1mouzbi/image/upload/v1712700242/devSources/articunoDollStore_y4ol7f.png",
	    name: "Articuno Pokemon Doll",
	    price: 6.90,
	    quantity: 2,
	  },
	  {
	    id: 3,
	    image: "https://res.cloudinary.com/dv1mouzbi/image/upload/v1711288928/devSources/pullBlacOvDBStore_q7iasw.png",
	    name: "Roshi Pullover",
	    price: 50.90,
	    quantity: 1,
	  },
	];
	const handleRemoveItem = (item) => {
     console.log("Removing item:", item);
    };

    const handleQuantityChange = (item, newQuantity) => {
     console.log("Changing quantity of", item.name, "to", newQuantity);
    };
    return (
      <div className="main_cart flex flex-col items-center justify-center w-100vw bg-gray mx-auto py-2 box-border">
        <CartLogic
          cartItems={products}
          onRemoveItem={handleRemoveItem}
          onQuantityChange={handleQuantityChange}
        />
        <FooterLogic />
      </div>
    );
  };

export default Cart;