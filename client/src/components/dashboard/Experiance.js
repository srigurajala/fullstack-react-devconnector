import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import Moment from "react-moment";
import { deleteExperiance } from "../../actions/profileActions";

class Experiance extends Component {
  onDeleteClick(id) {
    this.props.deleteExperiance(id, this.props.history);
  }
  render() {
    const experiance = this.props.experiance.map(exp => (
      <tr key={exp._id}>
        <td>{exp.company}</td>
        <td>{exp.title}</td>
        <td>
          <Moment format="DD/MM/YYYY">{exp.from}</Moment> -
          {exp.to === null ? (
            " Now"
          ) : (
            <Moment format="DD/MM/YYYY">{exp.to}</Moment>
          )}
        </td>
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, exp._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Experiance Credentials</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Company</th>
              <th>Title</th>
              <th>Years</th>
              <th />
            </tr>
            {experiance}
          </thead>
        </table>
      </div>
    );
  }
}

Experiance.propTypes = {
  deleteExperiance: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteExperiance }
)(withRouter(Experiance));
