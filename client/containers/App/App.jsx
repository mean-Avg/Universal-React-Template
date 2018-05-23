import React from 'react';
import DumbApp from '../../components/App';

class App extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			count: 0
		};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		this.setState({
			count: this.state.count + 1
		});
	}
	render() {
		console.log('state', this.state);
		return <DumbApp handleClick={this.handleClick} count={this.state.count} />;
	}
}

export default App;
