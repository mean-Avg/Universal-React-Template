import { combineReducers } from 'redux';
import { testReducer } from './containers/DispatchTester/storeMods';
import { dataBoy } from './containers/TestLayout/storeMods';

const rootReducer = combineReducers({
  data: dataBoy,
});

export default rootReducer;
