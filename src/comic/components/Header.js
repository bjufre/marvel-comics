import React from 'react';


const Header = ({ comic }) => (
  <header>
    <div className="top">
      <h1>{comic.title} #{comic.issueNumber}</h1>
      <p>{comic.year}</p>
    </div>

    <p>{comic.price}</p>
  </header>
);

export default Header;
