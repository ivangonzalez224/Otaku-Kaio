import React, { useEffect } from 'react';
import DetailsItem from './DetailsItem';
import { useSelector, useDispatch } from 'react-redux';
import { getProducts } from '../../redux/products/ProductsSlice';

const DetailsLogic = () => {
  const productId = useSelector((state) => state.params.productId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts(productId));
  }, [productId, dispatch]);

  const product = useSelector((state) => state.products.byId[productId]);

  return (
    <div>
      {product && <DetailsItem product={product} />}
      {!product && <p>Loading product details...</p>}
    </div>
  );
};

export default DetailsLogic;