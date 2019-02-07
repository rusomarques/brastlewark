import React from 'react';

const Gnome = props => {
  return (
    <div>
      <p>{props.gnome.name}</p>
      <img src={props.gnome.thumbnail} alt={props.gnome.name} />
    </div>
  );
};

export default Gnome;
