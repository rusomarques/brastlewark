import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initGnomes } from './../store/actions';
import Gnomes from '../components/Gnomes/Gnomes';

class GnomesBrowser extends Component {
  componentDidMount() {
    this.props.onInitGnomes();
  }

  render() {
    let gnomes = null;
    if (this.props.gnomes) {
      gnomes = <Gnomes gnomes={this.props.gnomes} />;
    }

    return gnomes;
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
