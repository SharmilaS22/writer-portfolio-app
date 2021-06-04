import React from "react";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AlertBox = ({ alertProp }) =>
  alertProp !== null &&
  alertProp.length > 0 &&
  alertProp.map((alert) => {
    return (
      <div key={alert.id} style={{ margin: "2rem 0 1rem" }}>
        <Alert severity={alert.alertType}>{alert.msg}</Alert>
      </div>
    );
  });
AlertBox.propTypes = {
  alertProp: PropTypes.array.isRequired,
};
const mapStateToProps = (state) => ({
  alertProp: state.alert,
});
export default connect(mapStateToProps)(AlertBox);