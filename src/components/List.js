import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteInterview } from "../actions/deleteInterview";

class List extends Component {
  deleteInterview = id => {
    this.props.dispatch(deleteInterview(id));
    alert("Delete Successful");
  };
  render() {
    const jsx = (
      <div>
        <h1>Interviews Scheduled</h1>
        {this.props.interviews.map(interview => (
          <div key={interview.id}>
            <h3>{interview.title}</h3>
            <ul>
              <li>Date : {interview.date}</li>
              <li>Start Time : {interview.start}</li>
              <li>End Time : {interview.end}</li>
              <li>
                <a href={"/show/" + interview.id}>Show</a>
              </li>
              <li>
                <a href={"/edit/" + interview.id}>Edit</a>
              </li>
              <li>
                <button
                  onClick={this.deleteInterview.bind(this, interview.id)}
                  style={{ background: "none", border: "none", color: "blue", textDecoration: "underline", cursor: "pointer" }}
                >
                  Delete
                </button>
              </li>
            </ul>
          </div>
        ))}
      </div>
    );
    return jsx;
  }
}

const mapStateToProps = state => {
  return {
    interviews: state.interviews
  };
};

export default connect(mapStateToProps)(List);

