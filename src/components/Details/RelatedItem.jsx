import React from 'react';

const RelatedItem = ({ product }) => {
  
  return (
    <div className="bg-white rounded-md p-4">
      <img src={product[0].image} alt={product[0].name} className="w-full mb-2" />
      <h6 className="text-gray-500 text-lg font-medium">{product[0].name}</h6>
      <p className="text-gray-400 line-through">{product[0].ori_price}</p>
      <p className="text-green-500 font-bold">${product[0].sale_price}</p>
    </div>
  );
};

export default RelatedItem;