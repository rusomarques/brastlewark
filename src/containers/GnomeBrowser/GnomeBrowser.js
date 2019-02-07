import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initGnomes } from '../../store/actions';
import Gnomes from '../../components/Gnomes/Gnomes';
import classes from './GnomeBrowser.module.css';
import Search from '../Search/Search';

class GnomeBrowser extends Component {
  componentDidMount() {
    this.props.onInitGnomes();
  }

  render() {
    let gnomes = null;
    if (this.props.gnomes) {
      let gnomesInfo = this.props.gnomes;
      if (this.props.searchResults) {
        console.log('hola');
        gnomesInfo = this.props.searchResults;
      }
      gnomes = <Gnomes gnomes={gnomesInfo} />;
    }

    return (
      <>
        <div className={classes.Navbar}>
          <Search />
        </div>
        <div className={classes.GnomeBrowser}>{gnomes}</div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    gnomes: state.gnomes,
    searchResults: state.searchResults
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
