import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const DispatchTester = props => {
	const divStyle = {
		height: '20px',
		width: '20px'
	};
	return (
		<Fragment>
			<button onClick={props.handleIncrement}>increment</button>
			<div style={divStyle}>{props.count}</div>
			<button onClick={props.handleDecrement}>decrement</button>
		</Fragment>
	);
};

DispatchTester.propTypes = {
	handleIncrement: PropTypes.func,
	handleDecrement: PropTypes.func,
	count: PropTypes.number
};

export default DispatchTester;
