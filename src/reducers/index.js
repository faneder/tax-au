import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import reducersTax from './reducersTax';

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
  tax: reducersTax,
});

export default rootReducer;
