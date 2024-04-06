import DetailsLogic from '../Details/DetailsLogic';
import FooterLogic from '../Footer/FooterLogic';

const Details = () =>  (
  <div className="main_details flex flex-col items-center justify-center w-100vw bg-gray mx-auto py-2">
    <DetailsLogic />
    <FooterLogic />
  </div>
  );

export default Details;