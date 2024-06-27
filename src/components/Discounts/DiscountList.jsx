import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getDiscounts } from '../../redux/discounts/DiscountsSlice';
import DiscountItem from './DiscountItem';

const DiscountList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { discountItems } = useSelector((state) => state.discounts);

  useEffect(() => {
    if (discountItems.length === 0) {
      dispatch(getDiscounts());
    }
  }, [dispatch, discountItems.length]);

  const categories = [
    { name: 'Clothes', callToAction: 'Latest fashion at unbeatable prices!' },
    { name: 'Mangas', callToAction: 'Grab your favorite manga now!' },
    { name: 'Dolls', callToAction: 'Perfect gifts for your loved ones!' },
    { name: 'Mugs', callToAction: 'Don’t miss these exclusive designs!' },
    { name: 'Games', callToAction: 'Limited time offers on top games!' },
  ];

  const handleItemClick = () => {
    navigate('/store');
  };

  return (
    <div className="offers-page p-6">
      {categories.map((category) => (
        <div key={category.name} className="category-section bg-blue-500 p-6 my-6 rounded-md w-full md:w-3/4 mx-auto">
          <h2 className="text-white text-xl font-bold mb-4">{category.name} Offers</h2>
          <p className="text-white mb-4">{category.callToAction}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {discountItems
              .filter((item) => item.category === category.name)
              .map((item) => (  
                <div key={item.name} onClick={handleItemClick}>
                  <DiscountItem {...item} />
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscountList;