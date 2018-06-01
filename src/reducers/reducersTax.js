import { FETCH_TAX } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TAX:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}