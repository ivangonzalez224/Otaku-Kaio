import React, { useEffect } from 'react';
import DetailsItem from './DetailsItem';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProducts } from '../../redux/products/ProductsSlice';

const DetailsLogic = () => {
  const dispatch = useDispatch();
  const { productId } = useParams();
  const { productItems } = useSelector((state) => state.products);

  useEffect(() => {
    if (productItems.length === 0) {
      dispatch(getProducts());  
    }
  });

  const filteredItem = productItems.filter((product) => product.id == productId);
  return (
    <div>
      {filteredItem && <DetailsItem product={filteredItem} />}
      {!filteredItem && <p>Loading product details...</p>}
    </div>
  );
};

export default DetailsLogic;