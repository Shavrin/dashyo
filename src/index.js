import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store/index';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import {addWindow} from './actions/index';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
 document.getElementById('root'));

// only for testing purposes
store.dispatch( addWindow({
    id: store.getState().windows.length,
    title: 'basic window',
    position: {
      x: 50,
      y: 125
    }
}));

store.dispatch( addWindow({
  id: store.getState().windows.length,
  title: 'basic window',
  position: {
    x: 200,
    y: 125
  }
}));

store.dispatch( addWindow({
  id: store.getState().windows.length,
  title: 'basic window',
  position: {
    x: 100,
    y: 125
  }
}));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
