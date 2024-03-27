import PropTypes from 'prop-types';

const CategoryItem = ({ name, image, itemCount }) => {
    return (
      <div className="catItemDiv bg-white m-4 p-4 flex items-center rounded-md hover:shadow-md">
        <div className="flex flex-col mr-4">
          <h4 className="text-base font-medium mb-2">{name}</h4>
          <span className="text-sm text-c6c6c6">{Math.floor(itemCount)} items</span>
        </div>
        <img src={image} alt={name} className="w-16 h-16 object-cover rounded-md" />
      </div>
    );
  };
  
  CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    itemCount: PropTypes.string.isRequired,
  };
  export default CategoryItem;