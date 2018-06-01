import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { logger, crashReporter } from './middleware/logger';

let loggerMiddleware = (process.env.NODE_ENV !== 'production') ? logger : '';

const createStoreWithMiddleware = applyMiddleware(loggerMiddleware, crashReporter)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker();
