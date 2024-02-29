import PropTypes from 'prop-types';
import CategoryItem from './CategoryItem';

const CategoryList = ({ catOptions }) => {
  return (
    <div>
      <h2 className="text-lg text-left font-bold text-111 mb-4">Popular Categories</h2>
      <div className="category_listContainer bg-f1f1f1 w-85 flex justify-center py-4"> 
        {catOptions.map(category => (
          <CategoryItem
            key={category.id}
            name={category.name}
            image={category.image}
            itemCount={category.itemCount}
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