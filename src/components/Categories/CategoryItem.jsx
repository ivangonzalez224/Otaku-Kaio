import PropTypes from 'prop-types';

const CategoryItem = ({ name, image, itemCount }) => {
    return (
      <div className="catItemDiv bg-white m-2 p-4 flex items-center rounded-md hover:shadow-md">
        <div className="flex flex-col mr-4">
          <h4 className="text-base font-medium mb-2">{name}</h4>
          <span className="text-sm text-c6c6c6">{itemCount} photos</span>
        </div>
        <img src={image} alt={name} className="w-16 h-16 object-cover rounded-md" />
      </div>
    );
  };
  
  CategoryItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    itemCount: PropTypes.number.isRequired,
  };
  export default CategoryItem;