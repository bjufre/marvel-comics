import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { mount, render } from 'enzyme';

import Header from '../../components/Header';


describe('Header', () => {
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )
  });

  it('renders all the correct properties', () => {
    const wrapper = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot();
  });

  it('renders with the correct className', () => {
    const wrapper = render(
      <MemoryRouter>
        <Header detail={true} />
      </MemoryRouter>
    )

    expect(wrapper).toMatchSnapshot();
  });
});
