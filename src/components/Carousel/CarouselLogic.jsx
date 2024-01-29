import CarouselItem from './CarouselItem';
import { MultiCarousel } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselLogic = () => {
    const { carouselItems } = [{id:1, image: 'image1.png'}, {id:2, image: 'image2.png'}, {id:3, image: 'image3.png'}];
    return (
      <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-md">
        <MultiCarousel
          items={carouselItems}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          keyBoardControl={true}
          draggable={false}
          className="relative w-full"
          responsive={carouselItems} // Display one item per slide on all screen sizes
        >
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} imageItem={item.image} />
          ))}
        </MultiCarousel>
      </div>
    );
  };

  export default CarouselLogic;