import { combineReducers } from 'redux';
import {inputReducer} from './containers/TestForm/reducer';

const rootReducer = combineReducers({
testInputs: inputReducer,
extras: '',
});

export default rootReducer;
