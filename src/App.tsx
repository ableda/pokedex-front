import React, { useReducer } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';

import './App.css';
import 'fontsource-roboto';

import './i18n';

import RouterConfig from './navigation/routerConfig';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <RouterConfig></RouterConfig>
      </BrowserRouter>
    </div>
  );
};

export default App;
