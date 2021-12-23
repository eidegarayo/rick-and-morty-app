import { combineReducers } from 'redux';

import accountReducers from './accountReducers';

const rootReducer = combineReducers({
  account: accountReducers,
});

export default rootReducer;
