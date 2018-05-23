import React from 'react';
import DumbDispatchTester from '../../components/DispatchTester';

class DispatchTester extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		
	}
	render() {
		return (
			<DumbDispatchTester
				handleClick={this.handleClick}
				count={this.state.count}
			/>
		);
	}
}

  ​
export const mapDispatchToProps = (dispatch, ownProps) => {
	return {
	  onClick: () => {
		dispatch(setVisibilityFilter(ownProps.filter))
	  }
	}
  }
  ​
const DispatchTesterWrapper = connect(
	null,
	mapDispatchToProps
  )(DispatchTester)
  ​
export default DispatchTesterWrapper;

