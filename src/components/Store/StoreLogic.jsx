import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getProducts } from '../../redux/products/ProductsSlice';
import StoreList from './StoreList';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const StoreLogic = () => {
  const dispatch = useDispatch();
  const { productItems } = useSelector((state) => state.products);
  const query = useQuery();
  const category = query.get('category') || 'Clothes';

  useEffect(() => {
    if (productItems.length === 0) {
      dispatch(getProducts());  
    }
  });
  return (
    <div className="store_logic flex flex-col justify-center items-center mt-8 w-full md:w-[73%]">
      <StoreList products={productItems} initialCategory={category} />
    </div>
  );
}  

export default StoreLogic;