import React from 'react';

const RelatedItem = ({ image, name, priceList, sellingPrice }) => {
  
  return (
    <div className="bg-white rounded-md p-4">
      <img src={image} alt={name} className="w-full mb-2" />
      <h6 className="text-gray-500 text-lg font-medium">{name}</h6>
      <p className="text-gray-400 line-through">{priceList}</p>
      <p className="text-green-500 font-bold">${sellingPrice}</p>
    </div>
  );
};

export default RelatedItem;