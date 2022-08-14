import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/Style.scss';
import 'tw-elements';
import { Provider } from 'react-redux';
import store from './Redux/configureStore';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
