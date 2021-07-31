import { ListStatistic } from "./Statistics.styled";
import { StatisticsItem } from "./StatisticsItem";
import PropTypes from "prop-types";

const Statistics = ({ stateObj, total, positivePercentage }) => {
  return (
    <ListStatistic>
      {Object.keys(stateObj).map(property => (
        <StatisticsItem
          key={property}
          label={property}
          value={stateObj[`${property}`]}
        />
      ))}

      <StatisticsItem key="total" label="Total" value={total()} />
      <StatisticsItem
        key="positivePercentage"
        label="Positive feedback"
        value={positivePercentage()}
      />
    </ListStatistic>
  );
};

Statistics.propTypes = {
  stateObj: PropTypes.object.isRequired,
  total: PropTypes.func.isRequired,
  positivePercentage: PropTypes.func.isRequired,
};

export default Statistics;

// import {
//   ItemStatistic,
//   ListStatistic,
//   ValueStatistic,
// } from "./Statistics.styled";
// import PropTypes from "prop-types";

// const Statistics = ({ stateObj, total, positivePercentage }) => {
//   return (
//     <ListStatistic>
//       {Object.keys(stateObj).map(property => (
//         <ItemStatistic key={property}>
//           <ValueStatistic>{property}</ValueStatistic>
//           {stateObj[`${property}`]}
//         </ItemStatistic>
//       ))}

//       <ItemStatistic key="total">
//         <ValueStatistic>Total:</ValueStatistic>
//         {total(Object.values(stateObj))}
//       </ItemStatistic>
//       <ItemStatistic key="positivePercentage">
//         <ValueStatistic>Positive feedback:</ValueStatistic>
//         {positivePercentage()}
//       </ItemStatistic>
//     </ListStatistic>
//   );
// };

// Statistics.propTypes = {
//   stateObj: PropTypes.object.isRequired,
//   total: PropTypes.func.isRequired,
//   positivePercentage: PropTypes.func.isRequired,
// };

// export default Statistics;
