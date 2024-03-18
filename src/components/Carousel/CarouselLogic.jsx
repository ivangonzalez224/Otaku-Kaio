import CarouselItem from './CarouselItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselLogic = () => {
    const carouselItems = [{id:1, image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1709336758/devSources/carouselAnime1_syz7dy.png'}];
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
      },
      desktop: {
        breakpoint: { max: 3000, min: 992 },
        items: 3,
      },
      tablet: {
        breakpoint: { max: 992, min: 765 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 765, min: 0 },
        items: 1,
      },
    };
    return (
      <Carousel responsive={responsive}>
        {carouselItems.map((item) => (
          <CarouselItem
            key={item.id}
            itemImage={item.image} />
        ))}
      </Carousel>
    );
  };

  export default CarouselLogic;