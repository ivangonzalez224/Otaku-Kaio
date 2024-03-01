import PropTypes from 'prop-types';

const CarouselItem = (itemImage ) => (
  <img
    src= {itemImage}
    alt= "Offert"
    className="h-full w-full object-cover"
  /> 
);

CarouselItem.propTypes = {
  itemImage: PropTypes.string.isRequired,
};

export default CarouselItem;