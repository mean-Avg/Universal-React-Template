import { combineReducers } from 'redux';
import {testReducer} from './containers/DispatchTester/storeMods';
​
const rootReducer = combineReducers({
    testReducer
})
​
export default rootReducer;