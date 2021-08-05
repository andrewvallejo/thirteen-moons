import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';


ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  </Router>
);

