import * as actionTypes from './actionTypes';

const initialState = {
  gnomes: null,
  searchResults: null,
  searching: false
};

const searchGnomes = (state, action) => {
  const lowercaseSearchInput = action.searchInput.toLowerCase();

  const filteredGnomes = state.gnomes.filter(gnome => {
    return gnome.name.toLowerCase().includes(lowercaseSearchInput);
  });

  return {
    ...state,
    searchResults: filteredGnomes,
    searching: true
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
    case actionTypes.STOP_SEARCH:
      return {
        ...state,
        searching: false
      };
    default:
      return state;
  }
};

export default reducer;
