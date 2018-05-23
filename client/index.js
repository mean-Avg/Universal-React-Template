import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import RootReducer from './rootReducer';
import App from './containers/App';

const store = createStore(RootReducer);
console.log(store);
console.log(store.getState());

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
