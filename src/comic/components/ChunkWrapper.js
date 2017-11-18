import React from 'react';
import chunk from 'lodash.chunk';


const ChunkWrapper = ({ name, items, expand }) => (
  <div className={`${name}-wrapper`}>
    {
      Array.isArray(items) && items.length
        ? chunk(items, 3).map((chunk, idx) => (
          <div key={`${name}-chunk-${idx}`}>
            {chunk.map(item => <p key={expand(item)}>{expand(item)}</p>)}
          </div>
        ))
        : <p>No {name} available.</p>
    }
  </div>
);

export default ChunkWrapper;
