import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getLandings } from '../../redux/landings/LandingsSlice';
import ArrivalList from './ArrivalList';

const ArrivalLogic = () => {
  const dispatch = useDispatch();
  const { landingItems } = useSelector((state) => state.landings);
  
  useEffect(() => {
    if (landingItems.length === 0) {
      dispatch(getLandings());  
    }
  });
  const arrivalOptions = landingItems.filter(cat => cat.category === 'arrival');

  return (
    <div className="flex flex-col justify-center items-center w-full mt-8">
      <ArrivalList arrivalOptions={arrivalOptions} />
    </div>
  );
};

export default ArrivalLogic;