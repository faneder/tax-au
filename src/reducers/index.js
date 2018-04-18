import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: reduxFormReducer, // mounted under "form"
});

export default rootReducer;
