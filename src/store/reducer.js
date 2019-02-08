import * as actionTypes from './actionTypes';

const initialState = {
  gnomes: null,
  searchResults: null,
  searching: false,
  pagesShown: 1
};

const setGnomes = (state, action) => {
  return {
    ...state,
    gnomes: action.gnomes
  };
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

const stopSearch = (state, action) => {
  return {
    ...state,
    searching: false
  };
};

const loadNextPage = (state, action) => {
  const newPagesShown = state.pagesShown + 1;
  return {
    ...state,
    pagesShown: newPagesShown
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GNOMES:
      return setGnomes(state, action);
    case actionTypes.SEARCH_GNOME:
      return searchGnomes(state, action);
    case actionTypes.STOP_SEARCH:
      return stopSearch(state, action);
    case actionTypes.LOAD_NEXT_PAGE:
      return loadNextPage(state, action);
    default:
      return state;
  }
};

export default reducer;
