import React, { Fragment } from 'react';
import DumbApp from '../../components/App';
import DispatchTester from '../DispatchTester/DispatchTester';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <Fragment>
        <DumbApp handleClick={this.handleClick} count={this.state.count} />
        <DispatchTester />
      </Fragment>
    );
  }
}

export default App;
