import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';


const Header = ({ detail }) => (
  <div className={cn({
    'marvel-header': true,
    detail,
  })}>
    <Link to="/">
      <div id="marvel-logo">
        <img src="/img/marvel-logo.svg" alt="Marvel Comics"/>
      </div>
    </Link>
  </div>
)

export default Header;
