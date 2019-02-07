import * as actionTypes from './actionTypes';

export const initGnomes = () => {
  return {
    type: actionTypes.INIT_GNOMES
  };
};

export const setGnomes = gnomes => {
  return {
    type: actionTypes.SET_GNOMES,
    gnomes
  };
};

export const searchGnome = searchInput => {
  return {
    type: actionTypes.SEARCH_GNOME,
    searchInput
  };
};
