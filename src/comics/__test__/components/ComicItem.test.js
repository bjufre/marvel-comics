import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { mount, render } from 'enzyme';

import ComicItem from '../../components/ComicItem';


const IMAGE_NOT_FOUND = `http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg`;

const comic = JSON.parse(`{"id":16961,"digitalId":0,"title":"Rawhide Kid","issueNumber":134,"variantDescription":"","description":null,"modified":"-0001-11-30T00:00:00-0500","isbn":"","upc":"","diamondCode":"","ean":"","issn":"","format":"Comic","pageCount":0,"textObjects":[],"resourceURI":"http://gateway.marvel.com/v1/public/comics/16961","urls":[{"type":"detail","url":"http://marvel.com/comics/issue/16961/rawhide_kid_1960_134?utm_campaign=apiRef&utm_source=a1af9305675ac96b2505d95b4d442607"}],"series":{"resourceURI":"http://gateway.marvel.com/v1/public/series/2988","name":"Rawhide Kid (1960 - 1979)"},"variants":[],"collections":[],"collectedIssues":[],"dates":[{"type":"onsaleDate","date":"-0001-11-30T00:00:00-0500"},{"type":"focDate","date":"-0001-11-30T00:00:00-0500"}],"prices":[{"type":"printPrice","price":0}],"thumbnail":"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_uncanny.jpg","images":[],"creators":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/16961/creators","items":[],"returned":0},"characters":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/16961/characters","items":[],"returned":0},"stories":{"available":2,"collectionURI":"http://gateway.marvel.com/v1/public/comics/16961/stories","items":[{"resourceURI":"http://gateway.marvel.com/v1/public/stories/35583","name":"","type":""},{"resourceURI":"http://gateway.marvel.com/v1/public/stories/67628","name":"Rawhide Kid 134 cover","type":"cover"}],"returned":2},"events":{"available":0,"collectionURI":"http://gateway.marvel.com/v1/public/comics/16961/events","items":[],"returned":0},"year":"1960","price":"0$"}`);

describe('ComicItem', () => {
  it('renders without crashing', () => {
    mount(
      <MemoryRouter>
        <ComicItem comic={{}} />
      </MemoryRouter>,
    );
  });

  it('renders all the correct properties', () => {
    const wrapper = render(
      <MemoryRouter>
        <ComicItem comic={{
          ...comic,
          title: 'Rawhide Kid',
          year: '1960 - 1979',
        }} />
      </MemoryRouter>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
