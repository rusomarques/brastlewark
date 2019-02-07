import React from 'react';
import { Link } from 'react-router-dom';

import Gnome from '../Gnome/Gnome';

const Gnomes = props => {
  return props.gnomes.map(gnome => {
    return (
      <Link key={gnome.id} to={`/gnome/${gnome.id}`}>
        <Gnome gnome={gnome} />
      </Link>
    );
  });
};

export default Gnomes;
