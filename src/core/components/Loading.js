import React from 'react';
import ReactLoading from 'react-loading';
import cx from 'classnames';


export default ({ loading }) => (
  <div className={cx({
    'marvel-comics-loading': true,
    active: loading
  })}>
    <ReactLoading type="bars" color="#ED1D24" width="90px" />
  </div>
)
