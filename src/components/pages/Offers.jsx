import FooterLogic from '../Footer/FooterLogic';
import DiscountList from '../Discounts/DiscountList';

const Offers = () =>  (
  <div className="main_offers flex flex-col items-center justify-center w-100vw bg-gray mx-auto py-2 box-border">
    <DiscountList />
    <FooterLogic />
  </div>
  );

export default Offers;