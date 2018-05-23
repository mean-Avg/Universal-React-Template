import React from 'react';
import PropTypes from 'prop-types';

const App = props => {
	return (
		<div>
			<button onClick={props.handleClick}>
				a buttttonn clicked {props.count} times
			</button>
		</div>
	);
};

App.propTypes = {
	handleClick: PropTypes.func,
	count: PropTypes.number
};

export default App;
