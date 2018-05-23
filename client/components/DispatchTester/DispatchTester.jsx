import React from 'react';
import PropTypes from 'prop-types';

const DispatchTester = props => {
	return (
		<div>
			<button onClick={props.handleClick}>{`value in store is ${
				props.count
			}`}</button>
		</div>
	);
};

DispatchTester.propTypes = {
	handleClick: PropTypes.func,
	count: PropTypes.number
};

export default DispatchTester;
