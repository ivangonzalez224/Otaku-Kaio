import CarouselLogic from '../Carousel/CarouselLogic';
import CategoryLogic from '../Categories/CategoryLogic';
import OfferLogic from '../Offer/OfferLogic';

const Home = () =>  (
  <div className="main_home flex flex-col justify-center w-100vw bg-gray-200">
    <CarouselLogic />
    <CategoryLogic />
    <OfferLogic />
  </div>
  );

export default Home;