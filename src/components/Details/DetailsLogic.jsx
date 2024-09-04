import React, { useEffect } from 'react';
import DetailsItem from './DetailsItem';
import RelatedProducts from './RelatedProducts';
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
  const relatedCat = filteredItem[0].category;
  const filteredRelated = productItems.filter((product) => product.category == relatedCat);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-[85%] max-w-[768px] rounded-md shadow-md">
        {filteredItem && <DetailsItem product={filteredItem} />}
        {!filteredItem && <p>Loading product details...</p>}
      </div>
      <div className="w-full flex items-center justify-center">
        {filteredRelated && <RelatedProducts products={filteredRelated} className="justify-self-start" />}
        {!filteredRelated && <p>Loading product details...</p>}
      </div>
    </div>  
  );
};

export default DetailsLogic;