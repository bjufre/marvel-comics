import React from 'react';
import { Link } from 'react-router-dom';
import truncatise from 'truncatise';


const truncateOptions = {
  TruncateBy: 'words',
  TruncateLength: 3,
  StripHTML: true,
  Strict: true,
  Suffix: '...',
};

const fullTitle = comic => `${comic.title} #${comic.issueNumber}`;

const ComicItem = ({ comic }) => (
  <div className="marvel-comics-comic-item" title={fullTitle(comic)}>
    <Link to={`/${comic.id}`}>
      <div className="comic-item-image">
        <img src={comic.thumbnail} alt={comic.title} />
      </div>

      <h3 className="comic-item-title" title={fullTitle(comic)}>{truncatise(fullTitle(comic), truncateOptions)}</h3>
      <div className="comic-item-meta">
        { comic.year && <p>{comic.year}</p> }
        { comic.price && <p>{comic.price}</p> }
      </div>
    </Link>
  </div>
);

export default ComicItem;
