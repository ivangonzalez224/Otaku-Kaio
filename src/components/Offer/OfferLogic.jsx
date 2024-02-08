const OfferLogic = () => {
    const offerOptions = [
      { id: 1, title: 'Animes', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238362/devSources/veg_nature_category_vcdj3e.png', discount: 35 },
      { id: 2, title: 'T-Shirts', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238370/devSources/veg_good_category_suwi8n.png', discount: 25 },
    ];
  
    return (
      <div className="grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <h2 className="text-xl font-bold mb-2">Daily offer</h2>
          <p className="text-gray-600 mb-4">Check out our daily offers combined with big discounts on some products. Do not miss your chance.</p>
          <button className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700">
            Open Store
          </button>
        </div> 
        {offerOptions.map(option => (
          <div key={option.id} className="col-span-1 relative rounded-lg overflow-hidden bg-gray-200">
            <img
              src={option.image}
              alt="Background image"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <h3 className="text-xl font-bold inline-block mr-2">{option.title}</h3>
              <span className="text-gray-600">{option.discount}%</span>
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default OfferLogic;