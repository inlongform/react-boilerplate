
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

import rootReducer from './reducers';


const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

const store = composeEnhancers()(createStore)(rootReducer);

export default store;
