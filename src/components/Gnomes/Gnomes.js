import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Gnome from '../Gnome/Gnome';
import classes from './Gnomes.module.css';

const Gnomes = props => {
  const paginationSelector = 'pagin-selector';

  let numOfGnomes;
  if (props.pagesShown) {
    numOfGnomes = props.pagesShown * props.perPage;
  } else {
    numOfGnomes = 1337;
  }
  const paginatedGnomes = props.gnomes.slice(0, numOfGnomes);
  return paginatedGnomes.map(gnome => {
    return (
      <div key={gnome.id} className={`${classes.Gnome} ${paginationSelector}`}>
        <Link className={classes.Link} to={`/gnome/${gnome.id}`}>
          <Gnome gnome={gnome} />
        </Link>
      </div>
    );
  });
};

Gnomes.propTypes = {
  pagesShown: PropTypes.number.isRequired,
  gnomes: PropTypes.array.isRequired
};

export default Gnomes;
