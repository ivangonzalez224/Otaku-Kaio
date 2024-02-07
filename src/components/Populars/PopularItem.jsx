import PropTypes from 'prop-types';

const PopularItem = ({ name, discount, image, price }) => {
    return (
      <div className={`popImageProd flex w-48 h-48 bg-[url(${image})] bg-cover bg-center`}>
        <div className="popImageProd flex">
          <span>{discount}%</span>
        </div>    
        <span className="text-base font-medium mb-2">{name}</span>
        <span className="text-sm text-c6c6c6">$ {price}</span>
      </div>
    );
  };
  
  PopularItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    discount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
  };
  export default PopularItem;