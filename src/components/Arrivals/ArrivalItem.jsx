import PropTypes from 'prop-types';
import { FiShoppingCart } from "react-icons/fi";

const ArrivalItem = ({ description, image }) => {
    return (
      <div className="arrivalItemDiv bg-gray-200 m-2 p-4 flex flex-col rounded-md hover:shadow-md">
        <img className="mx-auto" src={image} alt='product image'></img>
        <div className="arrivalItemBottom flex items-center justify-between mt-4">
          <span className="text-base font-medium">{description}</span>
          <button className="bg-blue-500 text-white rounded-full px-4 py-2 text-sm6"><FiShoppingCart /></button>
        </div>
      </div>
    );
  };
  
  ArrivalItem.propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  export default ArrivalItem;