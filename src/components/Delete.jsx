import React, { Component } from "react";
import { SET_DELETE } from "../store/types";
import { connect } from "react-redux";

class Delete extends Component {
  render() {
    const { onDelete, id } = this.props;

    return (
      <div>
        <button onClick={() => this.props.dispatch( { type: SET_DELETE, payload: id })}>Delete</button>
      </div>
    );
  }
}

export default connect()(Delete);
