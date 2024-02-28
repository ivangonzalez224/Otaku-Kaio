const OfferLogic = () => {
    const offerOptions = [
      { id: 1, title: 'Animes', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1709161390/devSources/animeOffer_gvt5go.png', discount: 35 },
      { id: 2, title: 'T-Shirts', image: 'https://res.cloudinary.com/dv1mouzbi/image/upload/v1707238370/devSources/veg_good_category_suwi8n.png', discount: 25 },
    ];
  
    return (
      <div className="mainContainer flex justify-center items-center mt-16 mb-16">
        <div className="offerMain grid grid-cols-3 gap-8 w-full md:w-[82%]">
          <div className="offerCallAction flex flex-col items-start">
            <h2 className="text-xl font-bold mb-2">Daily offer</h2>
            <p className="text-gray-600 mb-4 text-left">Check out our daily offers combined with big discounts on some products. Do not miss your chance.</p>
            <button className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700">
              Open Store
            </button>
          </div>
          {offerOptions.map((option, index) => (
            <div key={option.id} className={`offerImagesDiv col-span-1 w-80 mx-auto rounded-lg overflow-hidden flex flex-col items-center justify-center ${index === 0 ? 'bg-blue-100' : 'bg-yellow-100'}`}>
              <div className="offerItemTop w-full flex justify-between items-center px-4 py-2 mb-2">
                <h3 className="text-xl font-bold inline-block mr-2">{option.title}</h3>
                <span className="text-gray-600 bg-white rounded-full py-1 px-2 flex flex-col items-center text-center">
                  <span className="text-base font-bold">{option.discount}%</span>
                  <span className="text-xs">OFF</span>
                </span>
              </div>
              <img
                src={option.image}
                alt="Background image"
                className="offerPic w-40 aspect-ratio-square object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OfferLogic;