import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './store/reducers/';
import {Application} from './layout/Application';

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//import {Application} from './layout/Application.jsx';


render(
  <Provider store={store}>
    <Application/>
  </Provider>,
  document.getElementById('content')
);