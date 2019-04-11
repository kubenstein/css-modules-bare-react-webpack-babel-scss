import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';

const Component = () => (
  <h1 styleName="header">CSS Modules</h1>
);

ReactDOM.render(
  <Component />,
  document.getElementById('app'),
);
