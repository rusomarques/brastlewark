import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initGnomes } from '../../store/actions';
import Gnomes from '../../components/Gnomes/Gnomes';
import classes from './GnomeBrowser.module.css';

class GnomeBrowser extends Component {
  componentDidMount() {
    this.props.onInitGnomes();
  }

  render() {
    let gnomes = null;
    if (this.props.gnomes) {
      gnomes = <Gnomes gnomes={this.props.gnomes} />;
    }

    return <div className={classes.GnomeBrowser}>{gnomes}</div>;
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
)(GnomeBrowser);
