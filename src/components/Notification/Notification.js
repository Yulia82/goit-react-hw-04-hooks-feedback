import { Notif } from "./Notification.styles";
import PropTypes from "prop-types";

const Notification = ({ message }) => {
  return <Notif>{message}</Notif>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
