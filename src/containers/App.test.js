import App from './App';
import NavigationBar from './NavigationBar';
import Tax from './Tax';
import { rendererComponent, mountComponent, shallowComponent } from '../test/helpers';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = mountComponent(App);
  });

  it('`App` renders without crashing', () => {
    shallow(<App />);
  });
});
