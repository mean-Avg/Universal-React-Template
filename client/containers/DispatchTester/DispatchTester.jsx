import React from 'react';
import { connect } from 'react-redux';
import DumbDispatchTester from '../../components/DispatchTester';
import { incrementAction, decrementAction } from './storeMods';

class DispatchTester extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return <DumbDispatchTester {...this.props} />;
	}
}

export const mapStateToProps = state => {
	return { count: state.count };
};

export const mapDispatchToProps = dispatch => {
	return {
		handleIncrement: () => dispatch(incrementAction()),
		handleDecrement: () => dispatch(decrementAction())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(DispatchTester);
