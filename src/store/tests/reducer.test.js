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
      searching: false
    });
  });

  it('should filter gnomes on SEARCH_GNOME action & set serching to true', () => {
    expect(
      reducer(
        {
          gnomes: mocks.gnomes,
          searchResults: null,
          searching: false
        },
        {
          type: actionTypes.SEARCH_GNOME,
          searchInput: mocks.searchInput
        }
      )
    ).toEqual({
      gnomes: mocks.gnomes,
      searchResults: mocks.searchResults,
      searching: true
    });
  });

  it('should set searching to falseon STOP_SEARCH action', () => {
    expect(
      reducer(
        {
          gnomes: mocks.gnomes,
          searchResults: mocks.searchResults,
          searching: true
        },
        {
          type: actionTypes.STOP_SEARCH
        }
      )
    ).toEqual({
      gnomes: mocks.gnomes,
      searchResults: mocks.searchResults,
      searching: false
    });
  });
});