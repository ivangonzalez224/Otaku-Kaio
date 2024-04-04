import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/products/ProductsSlice';
import StoreList from './StoreList';

const StoreLogic = () => {
  const dispatch = useDispatch();
  const { productItems } = useSelector((state) => state.products);
  useEffect(() => {
    if (productItems.length === 0) {
      dispatch(getProducts());  
    }
  });
  return (
    <div className="store_logic flex flex-col justify-center items-center mt-8 w-full md:w-[73%]">
      <StoreList products={productItems}/>
    </div>
  );
}  

export default StoreLogic;