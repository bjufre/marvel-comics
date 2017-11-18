import React from 'react';
import ReactDOM from 'react-dom';
import { mount, render } from 'enzyme';
import renderer from 'react-test-renderer';

import Acrylic from '../../components/Acrylic';


const IMAGE_NOT_FOUND = `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg`;

describe('Acrylic', () => {
  it('renders without crashing', () => {
    const json = renderer.create(
      <Acrylic image={IMAGE_NOT_FOUND} />
    ).toJSON();

    expect(json).toMatchSnapshot();
  });

  it('renders all the correct properties', () => {
    const wrapper = renderer.create(
      <Acrylic image={IMAGE_NOT_FOUND} />
    ).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
