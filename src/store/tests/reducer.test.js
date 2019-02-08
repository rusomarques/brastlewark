import reducer from '../reducer';
import * as actionTypes from './../actionTypes';
import * as mocks from './mocks';

describe('reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(mocks.initialState);
  });

  it('should store gnomes on SET_GNOMES action', () => {
    expect(
      reducer(mocks.initialState, {
        type: actionTypes.SET_GNOMES,
        gnomes: mocks.gnomes
      })
    ).toEqual({
      gnomes: mocks.gnomes,
      searchResults: null,
      searching: false,
      pagesShown: 1
    });
  });

  it('should filter gnomes on SEARCH_GNOME action & set serching to true', () => {
    expect(
      reducer(
        {
          gnomes: mocks.gnomes,
          searchResults: null,
          searching: false,
          pagesShown: 1
        },
        {
          type: actionTypes.SEARCH_GNOME,
          searchInput: mocks.searchInput
        }
      )
    ).toEqual({
      gnomes: mocks.gnomes,
      searchResults: mocks.searchResults,
      searching: true,
      pagesShown: 1
    });
  });

  it('should set searching to false on STOP_SEARCH action', () => {
    expect(
      reducer(
        {
          gnomes: mocks.gnomes,
          searchResults: mocks.searchResults,
          searching: true,
          pagesShown: 1
        },
        {
          type: actionTypes.STOP_SEARCH
        }
      )
    ).toEqual({
      gnomes: mocks.gnomes,
      searchResults: mocks.searchResults,
      searching: false,
      pagesShown: 1
    });
  });

  it('should increase 1 pagesShown on LOAD_NEXT_PAGE', () => {
    expect(
      reducer(mocks.initialState, {
        type: actionTypes.LOAD_NEXT_PAGE
      })
    ).toEqual({
      ...mocks.initialState,
      pagesShown: 2
    });
  });
});
