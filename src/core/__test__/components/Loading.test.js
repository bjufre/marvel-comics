import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';

import Loading from '../../components/Loading';


const IMAGE_NOT_FOUND = `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg`;

describe('Loading', () => {
  it('renders without crashing', () => {
    render(
      <Loading />
    );
  });

  it('renders all the correct properties', () => {
    const wrapper = shallow(
      <Loading />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper).not.toHaveClassName('active');
  });

  it('sets the class to active when loading is true', () => {
    const wrapper = shallow(
      <Loading loading={true} />
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper).toHaveClassName('active');
  });
});
