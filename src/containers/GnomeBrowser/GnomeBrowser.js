import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initGnomes, loadNextPage } from '../../store/actions';
import Gnomes from '../../components/Gnomes/Gnomes';
import classes from './GnomeBrowser.module.css';
import Search from '../Search/Search';
import Spinner from '../../components/UI/Spinner/Spinner';

export class GnomeBrowser extends Component {
  state = {
    scrolling: false,
    perPage: 20,
    totalPages: 67
  };
  componentDidMount() {
    this.props.onInitGnomes();
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', e => {
      this.handleScroll(e);
    });
  }

  handleScroll = e => {
    const { scrolling, totalPages, page } = this.state;
    if (scrolling) return;
    if (totalPages <= page) return;
    const lastGnome = document.querySelector('.pagin-selector:last-child');
    if (lastGnome) {
      const lastGnomeOffset = lastGnome.offsetTop + lastGnome.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      const bottomOffset = 10;
      if (pageOffset > lastGnomeOffset - bottomOffset) {
        this.onScroll();
      }
    }
  };

  onScroll() {
    this.props.onLoadNextPage();
  }

  render() {
    let gnomes = <Spinner />;
    if (this.props.gnomes) {
      let gnomesInfo = this.props.gnomes;
      if (this.props.searchResults && this.props.searching) {
        gnomesInfo = this.props.searchResults;
      }
      gnomes = (
        <Gnomes
          gnomes={gnomesInfo}
          pagesShown={this.props.pagesShown}
          perPage={this.state.perPage}
        />
      );
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
    searchResults: state.searchResults,
    searching: state.searching,
    pagesShown: state.pagesShown
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onInitGnomes: () => dispatch(initGnomes()),
    onLoadNextPage: () => dispatch(loadNextPage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GnomeBrowser);
