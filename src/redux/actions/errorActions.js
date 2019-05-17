import {
  LOADING_ERROR,
  CLEAR_ERRORS,
} from './types';

export const loadingError = () => ({
  type: LOADING_ERROR,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});
