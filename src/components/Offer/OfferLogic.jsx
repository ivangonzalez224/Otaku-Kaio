import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getLandings } from '../../redux/landings/LandingsSlice';

const OfferLogic = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { landingItems } = useSelector((state) => state.landings);
  
  useEffect(() => {
    if (landingItems.length === 0) {
      dispatch(getLandings());  
    }
  });
  const offerOptions = landingItems.filter(cat => cat.category === 'offer');
  
  const handleOpenStore = () => {
    navigate('/store');
  };

    return (
      <div className="mainContainer flex justify-center items-center mt-16 mb-16">
        <div className="offerMain grid grid-cols-1 md:grid-cols-3 gap-8 w-[85%] max-w-[768px] mx-auto">
          <div className="offerCallAction flex flex-col items-start">
            <h2 className="text-xl font-bold mb-2">Daily offer</h2>
            <p className="text-gray-600 mb-4 text-left">Check out our daily offers combined with big discounts on some products. Do not miss your chance.</p>
            <button className="inline-flex items-center px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700"
            onClick={handleOpenStore}
            >
              Open Store
            </button>
          </div>
          {offerOptions.map((option, index) => (
            <div
              key={option.id}
              className={`offerImagesDiv w-full rounded-lg overflow-hidden flex flex-col items-center justify-center ${index === 0 ? 'bg-blue-100' : 'bg-yellow-100'
              }`}
            >
              <div className="offerItemTop w-full flex justify-between items-center px-4 pt-2 mb-0">
                <h3 className="text-lg md:text-xl font-bold inline-block mr-2">{option.title}</h3>
                <span className="text-gray-600 bg-white rounded-full py-1 px-2 flex flex-col items-center text-center">
                  <span className="text-base font-bold">{Math.floor(option.offer)}%</span>
                  <span className="text-xs">OFF</span>
                </span>
              </div>
              <img
                src={option.image}
                alt="Background image"
                className="offerPic w-40 mb-4 aspect-ratio-square object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default OfferLogic;