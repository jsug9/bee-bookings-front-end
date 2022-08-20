import React from 'react';

const PleaseLogin = (props) => (
  <div>
    <h1 className="please-log-in">
      Please Log In to
      {' '}
      {props.message}
    </h1>
  </div>
);

export default PleaseLogin;
