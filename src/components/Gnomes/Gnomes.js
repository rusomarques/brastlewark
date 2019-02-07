import React from 'react';
import { Link } from 'react-router-dom';

import Gnome from '../Gnome/Gnome';
import classes from './Gnomes.module.css';

const Gnomes = props => {
  return props.gnomes.map(gnome => {
    return (
      <div key={gnome.id} className={classes.Gnome}>
        <Link className={classes.Link} to={`/gnome/${gnome.id}`}>
          <Gnome gnome={gnome} />
        </Link>
      </div>
    );
  });
};

export default Gnomes;
