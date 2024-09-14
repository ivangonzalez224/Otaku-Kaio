import PropTypes from 'prop-types';
import ArrivalItem from './ArrivalItem';

const ArrivalList = ({ arrivalOptions }) => (
    <div className="arrivalMainDiv w-[85%] max-w-[768px] mx-auto">
      <h2 className="text-lg text-left font-bold text-gray-900 mb-4 ">Latest Arrivals</h2>
      <div className="arrival_listContainer bg-gray-100 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4">
        {arrivalOptions.map((arrival) => (
          <ArrivalItem
            key={arrival.id}
            description={arrival.name}
            category={arrival.sub}
            image={arrival.image}
            className="arrivalItem"
          />
        ))}
      </div>
    </div>
  );

ArrivalList.propTypes = {
  arrivalOptions: PropTypes.array.isRequired,
};

export default ArrivalList;