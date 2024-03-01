import CarouselItem from './CarouselItem';
import { Carousel } from "@material-tailwind/react";

const CarouselLogic = () => {
    const carouselItems = [{id:1, image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1709336758/devSources/carouselAnime1_syz7dy.png'}];
    
    return (
      <Carousel className="rounded-xl">
        {carouselItems.map((item) => (
          <CarouselItem key={item.id} itemImage={item.image} />
        ))}
      </Carousel>
    );
  };

  export default CarouselLogic;