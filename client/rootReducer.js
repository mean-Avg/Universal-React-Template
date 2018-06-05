import { combineReducers } from 'redux';
import { inputReducer } from './containers/TestView/reducer';

const rootReducer = combineReducers({
  testInputs: inputReducer,
  extras: '',
});

export default rootReducer;
