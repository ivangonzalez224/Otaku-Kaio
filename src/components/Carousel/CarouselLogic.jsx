import CarouselItem from './CarouselItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const CarouselLogic = () => {
    const carouselItems = [{id:1, image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1706235080/devSources/Discurso_de_ventas_para_Deliexpre%CC%81s_m2eull.png'}, {id:2, image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1706235080/devSources/Discurso_de_ventas_para_Deliexpre%CC%81s_m2eull.png'}];
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 0 },
          items: 1,
        },
      };

    return (
      <div className="relative h-80 w-full overflow-hidden rounded-lg shadow-md">
        <Carousel
          items={carouselItems}
          arrows={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          keyBoardControl={true}
          draggable={false}
          className="relative w-full"
          responsive={responsive}
        >
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} itemId={item.id} itemImage={item.image} />
          ))}
        </Carousel>
      </div>
    );
  };

  export default CarouselLogic;