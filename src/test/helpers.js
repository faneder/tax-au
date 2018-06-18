import React from 'react';
import renderer from 'react-test-renderer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// const spy = jest.fn();
const store = createStore(() => ({}));

const shallowComponent = (ComponentClass, props = {}, state = {}) => {
  return shallow(
    <Provider store={store}>
      <ComponentClass {...props} />
    </Provider>
  	);
};

const mountComponent = (ComponentClass, props = {}, state = {}) => {
  return mount(
    <Provider store={store}>
      <ComponentClass {...props} />
    </Provider>
  	);
};

const rendererComponent = (ComponentClass, props = {}, state = {}) => {
  const tree = renderer.create(
    <Provider store={store}>
      <ComponentClass {...props} />
    </Provider>
  ).toJSON();

  return tree;
};

export { rendererComponent, mountComponent, shallowComponent };
