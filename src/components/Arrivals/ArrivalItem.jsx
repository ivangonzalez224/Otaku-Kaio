import PropTypes from 'prop-types';
import { FiShoppingCart } from "react-icons/fi";

const ArrivalItem = ({ description, image }) => {
    return (
      <div className="arrivalItemDiv bg-white m-2 p-4 flex items-center rounded-md hover:shadow-md">
        <img src={image} alt='product image'></img>
        <div className="flex flex-col mr-4">
          <span className="text-base font-medium mb-2">{description}</span>
          <button className="text-sm text-c6c6c6"><FiShoppingCart /></button>
        </div>
      </div>
    );
  };
  
  ArrivalItem.propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  export default ArrivalItem;