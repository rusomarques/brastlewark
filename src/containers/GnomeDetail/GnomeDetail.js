import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import classes from './GnomeDetail.module.css';

class GnomeDetail extends Component {
  render() {
    let gnomeDetail = <Redirect to="/" />;

    if (this.props.gnome) {
      const {
        name,
        age,
        height,
        weight,
        thumbnail,
        hair_color
      } = this.props.gnome;

      gnomeDetail = (
        <div className={classes.GnomeDetail}>
          <h2 className={classes.Name}>{name}</h2>
          <div className={classes.GnomeDetailCard}>
            <img src={thumbnail} alt={name} />
            <div className={classes.GnomeInfo}>
              <p>{age} years</p>
              <p>Height: {height.toFixed(2)}</p>
              <p>Weight: {weight.toFixed(2)}</p>
              <p>{hair_color} hair</p>
            </div>
          </div>
        </div>
      );
    }

    return gnomeDetail;
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = +ownProps.match.params.id;
  const gnome = state.gnomes
    ? state.gnomes.find(gnome => gnome.id === id)
    : null;

  return {
    gnome
  };
};

GnomeDetail.propTypes = {
  gnome: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(GnomeDetail);
