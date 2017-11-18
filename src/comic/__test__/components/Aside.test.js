import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { mount, render } from 'enzyme';

import Aside from '../../components/Aside';


describe('Aside', () => {
  it('renders without crashing', () => {
    render(
      <MemoryRouter>
        <Aside alt={''} image={''} />
      </MemoryRouter>
    );
  });

  it('renders all the correct properties', () => {
    const alt = 'Yeah';
    const image = 'https://source-of-image.com/test.jpg';
    const wrapper = render(
      <MemoryRouter>
        <Aside alt={alt} image={image} />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
