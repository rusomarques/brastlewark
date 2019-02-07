import React from 'react';

import Gnome from '../Gnome/Gnome';

const Gnomes = props => {
  return props.gnomes.map(gnome => {
    return <Gnome key={gnome.id} gnome={gnome} />;
  });
};

export default Gnomes;
