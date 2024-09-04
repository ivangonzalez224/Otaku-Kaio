import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const CategoryItem = ({ name, image, itemCount }) => {
  const navigate = useNavigate();
  const handleCategoryClick = () => {
    navigate(`/store?category=${name}`);
  };
    
  return (
    <div 
      className="catItemDiv bg-white m-4 p-4 flex items-center justify-between rounded-md hover:shadow-md cursor-pointer transition-shadow duration-200 w-full max-w-[300px]"
      onClick={handleCategoryClick}
    >
      <div className="flex flex-col">
        <h4 className="text-base font-medium mb-2">{name}</h4>
        <span className="text-sm text-gray-500">{Math.floor(itemCount)} items</span>
      </div>
      <img src={image} alt={name} className="w-16 h-16 object-cover rounded-md ml-4" />
    </div>
  );
};
  
  CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    itemCount: PropTypes.string.isRequired,
  };
  export default CategoryItem;