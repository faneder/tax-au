import App from './App';
import NavigationBar from './NavigationBar';
import TaxContainer from './Tax';
import { rendererComponent, mountComponent, shallowComponent } from '../test/helpers';

describe('App', () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallowComponent(App);
  });

  it('`App` renders without crashing', () => {
    shallow(<App />);
  });

  it('`TaxContainer` renders without crashing', () => {
    expect(wrapper.dive(TaxContainer).length).toEqual(1);
  });

  it('`NavigationBar` renders without crashing', () => {
    expect(wrapper.dive(NavigationBar).length).toEqual(1);
  });
});
