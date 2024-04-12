import React from 'react';
import RelatedItem from './RelatedItem';

const RelatedProducts = ({ products }) => {

  return (
    <div>
      <h6>CUSTOMERS WHO VIEWED THIS PRODUCT ALSO VIEWED</h6>
      {products.map((product) => (
          <RelatedItem
            key={product.id}
            name={product.name}
            image={product.image}
            priceList={product.ori_price}
            sellingPrice={product.sale_price}
            className="relatedItem mr-4 mb-4"
          />
        ))}
    </div>
  );
};

export default RelatedProducts;