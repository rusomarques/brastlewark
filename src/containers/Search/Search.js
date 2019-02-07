import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchGnome, stopSearch } from './../../store/actions';

import classes from './Search.module.css';

class Search extends Component {
  handleChange = e => {
    const searchInput = e.target.value;
    if (searchInput.length > 0) {
      this.props.onSearch(searchInput);
    } else {
      this.props.onStopSearch();
    }
  };

  render() {
    return (
      <input
        className={classes.SearchBar}
        type="text"
        onChange={this.handleChange}
        placeholder="Search..."
      />
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSearch: searchInput => dispatch(searchGnome(searchInput)),
    onStopSearch: () => dispatch(stopSearch())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
