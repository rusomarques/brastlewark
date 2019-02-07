import * as actionTypes from './actionTypes';

const initialState = {
  gnomes: null,
  searchResults: null
};

const searchGnomes = (state, action) => {
  const lowercaseSearchInput = action.searchInput.toLowerCase();

  const filteredGnomes = state.gnomes.filter(gnome => {
    return gnome.name.toLowerCase().includes(lowercaseSearchInput);
  });

  return {
    ...state,
    searchResults: filteredGnomes
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GNOMES:
      return {
        ...state,
        gnomes: action.gnomes
      };
    case actionTypes.SEARCH_GNOME:
      return searchGnomes(state, action);
    default:
      return state;
  }
};

export default reducer;
