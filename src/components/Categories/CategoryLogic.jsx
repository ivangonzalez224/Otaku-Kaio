import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLandings } from '../../redux/landings/LandingsSlice';
import CategoryList from './CategoryList';

const CategoryLogic = () => {
  const dispatch = useDispatch();
  const { landingItems } = useSelector((state) => state.landings);
  
  useEffect(() => {
    if (landingItems.length === 0) {
      dispatch(getLandings());  
    }
  });
  
  const catOptions = landingItems.filter(cat => cat.category === 'cat');
  return (
    <div className="category-mainContainer w-[85%] max-w-[768px] mt-16 mx-auto">
      <CategoryList catOptions={catOptions} />
    </div>
  );
};

export default CategoryLogic;