import React from 'react';

import Aside from './Aside';
import Header from './Header';
import ChunkWrapper from './ChunkWrapper';


const ComicDetail = ({
  comic,
}) => (
  <div className="marvel-comics-detail">
    <main>
      <Header comic={comic} />

      <div className="content">
        <div className="description">
          {comic.description ? <p>{comic.description}</p> : <p>No description available.</p>}
        </div>

        <div className="creators">
          <h3>Creators</h3>

          <ChunkWrapper
            name="creators"
            expand={item => `${item.firstName} ${item.lastName}`}
            items={comic.creators ? comic.creators : []} />
        </div>

        <div className="characters">
          <h3>Characters</h3>

          <ChunkWrapper
            name="characters"
            expand={item => item.name}
            items={comic.characters ? comic.characters : []} />
        </div>
      </div>
    </main>

    <Aside
      image={comic.thumbnail}
      alt={`${comic.title} #${comic.issueNumber}`} />
  </div>
)

export default ComicDetail;
