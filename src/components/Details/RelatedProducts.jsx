import React from 'react';
import RelatedItem from './RelatedItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../assets/styles/carousel.css';

const RelatedProducts = ({ products }) => {
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 992 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 992, min: 765 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 765, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-5/6 flex flex-col items-start justify-center border-t border-gray-200 box-border mt-20 pt-6 px-10">
      <h6 className="text-left text-gray-600">CUSTOMERS WHO VIEWED THIS PRODUCT ALSO VIEWED</h6>
      <Carousel responsive={responsive}>
        {products.map((product) => (
          <RelatedItem
            key={product.id}
            name={product.name}
            image={product.image}
            priceList={product.ori_price}
            sellingPrice={product.sale_price}
            className="mr-10 box-border"
          />
        ))}
      </Carousel>  
    </div>
  );
};

export default RelatedProducts;