import PropTypes from 'prop-types';

const CarouselItem = (itemImage, itemId ) => (
  <div className="carousel-item">
    <img
      src= {itemImage}
      alt= "Offert"
    />
  </div>
);

CarouselItem.propTypes = {
  itemImage: PropTypes.string.isRequired,
  itemId: PropTypes.number.isRequired,
};

export default CarouselItem;