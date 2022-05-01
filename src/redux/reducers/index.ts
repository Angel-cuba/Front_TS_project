import { combineReducers } from 'redux';

// import product from './product'
// import ui from './ui'

import countries from './countries.reducer';

const rootReducer = () =>
  combineReducers({
    countries,
  });

export default rootReducer;
