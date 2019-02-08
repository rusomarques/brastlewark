import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { GnomeBrowser } from './GnomeBrowser';

import Spinner from '../../components/UI/Spinner/Spinner';
import Gnomes from '../../components/Gnomes/Gnomes';
import Search from '../Search/Search';
import * as mocks from './../../store/tests/mocks';

configure({ adapter: new Adapter() });

describe('<GnomeBrowser />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<GnomeBrowser onInitGnomes={() => {}} />);
  });

  it('should render a <Search /> />', () => {
    expect(wrapper.find(Search)).toHaveLength(1);
  });

  it('should render a <Spinner /> if gnomes not loaded', () => {
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });

  it('should render a <Gnomes /> if gnomes are loaded', () => {
    wrapper.setProps({ gnomes: mocks.gnomes });
    expect(wrapper.find(Gnomes)).toHaveLength(1);
  });
});
