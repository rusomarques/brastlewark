import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchGnome } from './../../store/actions';

import classes from './Search.module.css';

class Search extends Component {
  handleChange = e => {
    const searchInput = e.target.value;
    this.props.onSearch(searchInput);
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
    onSearch: searchInput => dispatch(searchGnome(searchInput))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Search);
