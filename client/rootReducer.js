import { combineReducers } from 'redux';
import { testReducer } from './containers/DispatchTester/storeMods';

const rootReducer = combineReducers({
  count: testReducer,
});

export default rootReducer;
