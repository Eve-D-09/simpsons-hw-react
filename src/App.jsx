import React, { Component } from "react";
import axios from "axios";
import Loading from "./components/Loading";
import Simpsons from "./components/Simpsons";
import "./App.css";

import { connect } from "react-redux";
import { API_DATA } from "./store/types";
import Controls from "./components/Controls";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=50`
    );

    
    data.forEach((element, index) => {
      element.id = index + Math.random();
    });

    this.props.dispatch({ type: API_DATA, payload: data });
  }

  render() {
    const { simpsons, searchInput, sortCharacters } = this.props;

    if (!simpsons) return <Loading />;

    if (simpsons.length === 0) return <p>You deleted everything!</p>;

    let filtered = [...simpsons];
    if (searchInput) {
      filtered = filtered.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(this.props.searchInput.toLowerCase());
      });
    }

   
    if (sortCharacters === "az") {
      filtered.sort((a, b) => {
        if (a.character > b.character) return 1;
        if (a.character < b.character) return -1;
      });
    }
    else if ( sortCharacters === "za" ) {
        filtered.sort((a, b) => {
        if (a.character > b.character) return -1;
        if (a.character < b.character) return 1;
    })
    }

    
    let total = 0;
    filtered.forEach((char) => {
      if (char.liked) total++;
    });

    return (
      <>
        <h1>Total no of liked chars #{total}</h1>
        <Controls />
        <Simpsons simpsons={filtered} />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    simpsons: state.simpsons,
    searchInput: state.searchInput,
    sortCharacters: state.sortCharacters,
  };
}

export default connect(mapStateToProps)(App);
