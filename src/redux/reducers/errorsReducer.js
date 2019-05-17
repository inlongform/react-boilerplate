import { LOADING_ERROR, CLEAR_ERRORS } from '../actions/types';

const initialState = {
  errors: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ERROR: {
      return { ...state, errors: action.payload };
    }
    case CLEAR_ERRORS: {
      return { ...state, errors: {} };
    }
    default:
      return state;
  }
};
