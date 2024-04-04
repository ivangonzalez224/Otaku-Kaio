import StoreLogic from '../Store/StoreLogic';
import FooterLogic from '../Footer/FooterLogic';

const Products = () =>  (
  <div className="main_products flex flex-col items-center justify-center w-100vw bg-gray mx-auto py-2">
    <StoreLogic />
    <FooterLogic />
  </div>
  );

export default Products;