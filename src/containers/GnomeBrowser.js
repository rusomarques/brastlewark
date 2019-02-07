import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initGnomes } from './../store/actions';

class GnomesBrowser extends Component {
  componentDidMount() {
    this.props.onInitGnomes();
  }

  render() {
    return <div>GnomesList</div>;
  }
}

const mapStateToProps = state => {
  return {
    gnomes: state.gnomes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitGnomes: () => dispatch(initGnomes())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GnomesBrowser);
