import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLandings } from '../../redux/landings/LandingsSlice';
import CarouselItem from './CarouselItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../assets/styles/carousel.css';

const CarouselLogic = () => {
  const dispatch = useDispatch();
  const { landingItems } = useSelector((state) => state.landings);
  
  useEffect(() => {
    if (landingItems.length === 0) {
      dispatch(getLandings());  
    }
  });
    const carouselItems = landingItems.filter(item => item.category === 'carousel');
    const responsive = {
      superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
      },
      desktop: {
        breakpoint: { max: 3000, min: 992 },
        items: 1,
      },
      tablet: {
        breakpoint: { max: 992, min: 765 },
        items: 1,
      },
      mobile: {
        breakpoint: { max: 765, min: 0 },
        items: 1,
      },
    };
    return (
      <div className="carousel-main">
        <Carousel responsive={responsive}>
          {carouselItems.map((item) => (
            <CarouselItem
              key={item.id}
              itemImage={item.image} 
              itemName={item.name}/>
          ))}
        </Carousel>
      </div>  
    );
  };

  export default CarouselLogic;