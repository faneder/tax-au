import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders TAX RETURN message', () => {
  const wrapper = shallow(<App />);
  const tax = <h1 className="App-title">TAX RETURN</h1>;

  expect(wrapper.contains(tax)).toEqual(true);
});
