import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './js/store/reducers/index';
import {Application} from './Components/Application/Application';
import {addAllData} from './js/utils/'

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

addAllData();

render(
  <Provider store={store}>
    <Application/>
  </Provider>,
  document.getElementById('content')
);