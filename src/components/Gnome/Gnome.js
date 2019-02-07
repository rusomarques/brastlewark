import React from 'react';
import classes from './Gnome.module.css';

const Gnome = props => {
  return (
    <div className={classes.Gnome}>
      <p>{props.gnome.name}</p>
      <div
        class={classes.Img}
        style={{
          backgroundImage: 'url(' + props.gnome.thumbnail + ')'
        }}
      />
    </div>
  );
};

export default Gnome;
