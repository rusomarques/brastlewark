import React, { Component } from 'react';
import { connect } from 'react-redux';
import { initGnomes } from '../../store/actions';
import Gnomes from '../../components/Gnomes/Gnomes';
import classes from './GnomeBrowser.module.css';
import Search from '../Search/Search';
import Spinner from '../../components/UI/Spinner/Spinner';

class GnomeBrowser extends Component {
  state = {
    scrolling: false,
    page: 1,
    perPage: 20,
    totalPages: 67
  };
  componentDidMount() {
    this.props.onInitGnomes();
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e);
    });
  }

  handleScroll = e => {
    const { scrolling, totalPages, page } = this.state;
    if (scrolling) return;
    if (totalPages <= page) return;
    const lastGnome = document.querySelector('.pagin-selector:last-child');
    const lastGnomeOffset = lastGnome.offsetTop + lastGnome.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 10;
    if (pageOffset > lastGnomeOffset - bottomOffset) {
      this.loadMore();
    }
  };

  loadMore() {
    this.setState(prevState => ({
      page: prevState.page + 1
    }));
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
          pages={this.state.page}
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
    searching: state.searching
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
