import CarouselLogic from '../Carousel/CarouselLogic';
import CategoryLogic from '../Categories/CategoryLogic';

const Home = () =>  (
  <div className="main_home flex flex-col justify-center w-100vw bg-gray-200">
    <CarouselLogic />
    <CategoryLogic />
  </div>
  );

export default Home;