import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
        <div>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <p>Height {height}</p>
          <p>{weight}</p>
          <p>{hair_color}</p>
          <img src={thumbnail} alt={name} />
        </div>
      );
    }

    return (
      <div>
        <h2>Gnome detail</h2>
        {gnomeDetail}
      </div>
    );
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

export default connect(mapStateToProps)(GnomeDetail);
