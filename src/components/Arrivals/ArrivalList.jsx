import PropTypes from 'prop-types';
import ArrivalItem from './ArrivalItem';

const ArrivalList = ({ arrivalOptions }) => (
    <div className="arrivalMainDiv pl-36 pr-36">
      <h2 className="text-lg text-left font-bold text-111 mb-4 ">Latest Arrivals</h2>
      <div className="arrival_listContainer bg-a1a1a1 grid grid-cols-3 gap-4 py-4">
        {arrivalOptions.map((arrival) => (
          <ArrivalItem
            key={arrival.id}
            description={arrival.description}
            image={arrival.image}
            className="arrivalItem mr-4 mb-4"
          />
        ))}
      </div>
    </div>
  );

ArrivalList.propTypes = {
  arrivalOptions: PropTypes.array.isRequired,
};

export default ArrivalList;