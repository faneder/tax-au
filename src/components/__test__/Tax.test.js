/* global shallow */
import Tax from '../Tax';
import React from 'react';
import { reduxForm } from 'redux-form';
import { mountComponent } from '../../test/helpers';

const setup = () => {
  const actions = {
    handleSubmit: jest.fn(),
    pristine: true,
    reset: jest.fn(),
    submitting: false,
    handletaxRefund: jest.fn(),
  }

  const Decorated = reduxForm({ form: 'TaxForm' })(Tax)

  const component = mountComponent(Decorated, actions);

  return {
    component: component,
    actions: actions,
  }
}

describe('Tax Component', () => {
  let component;

  beforeEach(() => {
    component = setup().component;
  });

  afterEach(() => {
    component.unmount();
  });

  it('find a form', () => {
    expect(component.find('form').length).toEqual(1);
  });

  it('has a income, taxWithhold, workExpenses, remoteZone, resident, medicareLevy', () => {
    expect(component.find("input[name='income']")).toHaveLength(1);
    expect(component.find("input[name='taxWithhold']")).toHaveLength(1);
    expect(component.find("input[name='workExpenses']")).toHaveLength(1);
    expect(component.find("input[name='remoteZone']")).toHaveLength(1);
    expect(component.find("input[name='resident']")).toHaveLength(1);
    expect(component.find("input[name='medicareLevy']")).toHaveLength(1);
  });

  it('renders submit button', () => {
    expect(component.find('button').find('#submitBtn')).toHaveLength(1);
  });

  describe('when the redux input was changed', () => {
    it('has a income text input, user can type in', () => {
      const button = component.find('input#income').first();

      button.simulate('change', {
        target: {
          value:10
        }
      });
      component.update();

      expect(component.find('input#income').first().prop('value')).toBe(10);
    });

    it('the reset function would be called once', () => {
      const actions = setup().actions;
      const component = shallow(<Tax {...actions} />);
      const button = component.dive().find('#resetBtn').first();

      button.simulate('click');

      expect(actions.reset).toBeCalled();
    });

    it('the handleSubmit function would be called once', () => {
      const actions = setup().actions;
      const component = shallow(<Tax {...actions} />);
      const button = component.dive().find('#submitBtn').first();

      button.simulate('click');

      expect(actions.handleSubmit).toBeCalled();
    });

    it('the handleSubmit function would be called once', () => {
      const actions = setup().actions;
      const component = shallow(<Tax {...actions} />);
      const button = component.dive().find('#submitBtn').first();

      button.simulate('click');

      expect(actions.handleSubmit).toBeCalled();
    });
  });
});
