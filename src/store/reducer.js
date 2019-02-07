import * as actionTypes from './actionTypes';

const initialState = {
  gnomes: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_GNOMES:
      return {
        ...state,
        gnomes: action.gnomes
      };
    default:
      return state;
  }
};

export default reducer;
