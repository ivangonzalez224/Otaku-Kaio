import PropTypes from 'prop-types';
import { BiStore } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const ArrivalItem = ({ description, image, category }) => {

  const navigate = useNavigate();

  const handleStoreClick = () => {
    navigate(`/store?category=${category}`);
  };  
    return (
      <div className="arrivalItemDiv bg-gray-200 m-2 p-4 flex flex-col rounded-md hover:shadow-md">
        <img className="mx-auto max-w-full h-auto" src={image} alt='product'></img>
        <div className="arrivalItemBottom flex items-center justify-between mt-4">
          <span className="text-sm md:text-base font-medium">{description}</span>
          <button 
            className="bg-blue-500 text-white rounded-full px-3 py-1 md:px-4 md:py-2 text-sm"
            onClick={handleStoreClick}
          >  
            <BiStore />
          </button>
        </div>
      </div>
    );
  };
  
  ArrivalItem.propTypes = {
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };
  export default ArrivalItem;