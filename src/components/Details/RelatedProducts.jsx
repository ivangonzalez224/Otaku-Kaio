import React from 'react';
import RelatedItem from './RelatedItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../../assets/styles/carousel.css';
import '../../assets/styles/relatedCarousel.css';

const RelatedProducts = ({ products }) => {
  
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1160 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1160, min: 745 },
      items: 3,
    },
    stablet: {
      breakpoint: { max: 745, min: 665 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 665, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="w-5/6 flex flex-col justify-center border-t border-gray-200 box-border mt-20 pt-6 px-4">
      <h6 className="text-left text-gray-600">CUSTOMERS WHO VIEWED THIS PRODUCT ALSO VIEWED</h6>
      <Carousel responsive={responsive} className="custom-carousel">
        {products.map((product) => (
            <div key={product.id} className="mx-8">
              <RelatedItem
                key={product.id}
                name={product.name}
                image={product.image}
                priceList={product.ori_price}
                sellingPrice={product.sale_price}
                className="mr-10 box-border"
              />
            </div>  
          ),
        )}
      </Carousel>  
    </div>
  );
};

export default RelatedProducts;