import { ItemStatistic, ValueStatistic } from "./Statistics.styled";
import PropTypes from "prop-types";

export const StatisticsItem = ({ label, value }) => {
  return (
    <ItemStatistic>
      <ValueStatistic>{label}:</ValueStatistic>
      {value}
    </ItemStatistic>
  );
};

StatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired,
};
