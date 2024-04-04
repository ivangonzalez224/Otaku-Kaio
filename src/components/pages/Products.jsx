import StoreLogic from '../Store/StoreLogic';
import FooterLogic from '../Footer/FooterLogic';

const Products = () =>  (
  <div className="main_products flex flex-col justify-center w-100vw bg-black mx-auto py-2">
    <StoreLogic />
    <FooterLogic />
  </div>
  );

export default Products;