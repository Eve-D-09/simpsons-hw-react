import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_ON_TOGGLE } from "../store/types";

class Name extends Component {
  render() {
    const { liked, character, id } = this.props;

    return (
      <div>
        <h1>{character}</h1>
        <button onClick={() => this.props.dispatch ( { type: SET_ON_TOGGLE, payload: id })}>
          {liked ? "Liked" : "Not liked"}
        </button>
      </div>
    );
  }
}

export default connect()(Name);
