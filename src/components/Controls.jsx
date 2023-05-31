import React, { Component } from 'react';
import { SET_SEARCH_INPUT, SET_SORT_CHARACTERS } from '../store/types';
import { connect } from "react-redux";

class Controls extends Component {


    onSearchInput = (e) => {
        this.props.dispatch({ type: SET_SEARCH_INPUT, payload: e.target.value})
    }


    onSortCharacters = (e) => {
        this.props.dispatch({ type: SET_SORT_CHARACTERS, payload: e.target.value})
    }

    

    render() {
        
        return (
            <>
            <input onInput={this.onSearchInput} type="text" />
            <select onChange={this.onSortCharacters}>
                  <option value=""></option>
                  <option value="az">A-Z</option>
                  <option value="za">Z-A</option>
            </select>
            
            </>
        )
    }
}

export default connect()(Controls);



