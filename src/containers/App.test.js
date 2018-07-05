import App from './App';
import NavigationBar from './NavigationBar';
import TaxContainer from './Tax';
import { shallowComponent } from '../test/helpers';

describe('App', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowComponent(App);
  });

  it('`App` renders without crashing', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('`TaxContainer` renders without crashing', () => {
    expect(wrapper.dive(TaxContainer).length).toEqual(1);
  });

  it('`NavigationBar` renders without crashing', () => {
    expect(wrapper.dive(NavigationBar).length).toEqual(1);
  });
});
