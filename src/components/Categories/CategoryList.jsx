import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

const CategoryList = ({ catOptions }) => {
  return (
    <div className="w-full max-w-[768px] mx-auto px-4">
      <h2 className="text-lg text-left font-bold text-gray-800 mb-4">Popular Categories</h2>
      <div className="category_listContainer bg-gray-100 flex flex-wrap justify-center gap-4 py-4"> 
        {catOptions.map(category => (
          <CategoryItem
            key={category.id}
            name={category.name}
            image={category.image}
            itemCount={category.offer}
          />
        ))}
      </div>
    </div>
  );
};

CategoryList.propTypes = {
    catOptions: PropTypes.array.isRequired,
  };
export default CategoryList;