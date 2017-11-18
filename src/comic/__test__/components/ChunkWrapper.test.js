import React from 'react';
import ReactDOM from 'react-dom';
import { mount, render, shallow } from 'enzyme';

import ChunkWrapper from '../../components/ChunkWrapper';


describe('ChunkWrapper', () => {
  it('renders without crashing', () => {
    const props = {
      name: 'creators',
      items: null,
      expand: jest.fn(),
    }
    render(
      <ChunkWrapper {...props} />
    );
  });

  it('renders all the correct properties', () => {
    const props = {
      name: 'Yeah',
      items: [{ name: 'Test' }],
      expand: (item) => item.name,
    }
    const wrapper = shallow(
      <ChunkWrapper {...props} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
