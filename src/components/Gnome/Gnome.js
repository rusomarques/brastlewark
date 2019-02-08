import React from 'react';
import PropTypes from 'prop-types';

import classes from './Gnome.module.css';

const Gnome = props => {
  return (
    <div className={classes.Gnome}>
      <p>{props.gnome.name}</p>
      <div
        className={classes.Img}
        style={{
          backgroundImage: 'url(' + props.gnome.thumbnail + ')'
        }}
      />
    </div>
  );
};

Gnome.propTypes = {
  gnome: PropTypes.object.isRequired
};

export default Gnome;
