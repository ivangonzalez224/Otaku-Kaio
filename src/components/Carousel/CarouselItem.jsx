import PropTypes from 'prop-types';

const CarouselItem = (
  { itemImage, itemName },
) => (
  <div className="carousel-item">
    <img
      src= {itemImage}
      alt= {itemName}
  	/>
  </div>
);

CarouselItem.propTypes = {
  itemImage: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
};

export default CarouselItem;