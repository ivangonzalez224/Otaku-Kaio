import CartLogic from '../Cart/CartLogic';
import FooterLogic from '../Footer/FooterLogic';

const Cart = () =>  (
  <div className="main_cart flex flex-col items-center justify-center w-100vw bg-gray mx-auto py-2 box-border">
    <CartLogic />
    <FooterLogic />
  </div>
  );

export default Cart;