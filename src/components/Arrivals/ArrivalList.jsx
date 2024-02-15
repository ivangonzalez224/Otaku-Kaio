import PropTypes from 'prop-types';
import ArrivalItem from './ArrivalItem';

const ArrivalList = ({ arrivalOptions }) => {
  return (
    <div>
      <h2 className="text-lg text-left font-bold text-111 mb-4 ml-44">Latest Arrivals</h2>
      <div className="category_listContainer bg-f1f1f1 w-85 flex justify-center py-4"> 
        {arrivalOptions.map(arrival => (
          <ArrivalItem
            key={arrival.id}
            description={arrival.description}
          />
        ))}
      </div>
    </div>
  );
};

ArrivalList.propTypes = {
    arrivalOptions: PropTypes.array.isRequired,
  };
export default ArrivalList;