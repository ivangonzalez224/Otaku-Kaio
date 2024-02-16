import CarouselLogic from '../Carousel/CarouselLogic';
import CategoryLogic from '../Categories/CategoryLogic';
import OfferLogic from '../Offer/OfferLogic';
import ArrivalsLogic from '../Arrivals/ArrivalsLogic';

const Home = () =>  (
  <div className="main_home flex flex-col justify-center w-100vw bg-white mx-auto">
    <CarouselLogic />
    <CategoryLogic />
    <OfferLogic />
    <ArrivalsLogic />
  </div>
  );

export default Home;