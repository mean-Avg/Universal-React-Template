import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import TestViewComponent from '../../components/TestView';
import { testInput } from './reducer';

class TestView extends React.Component {
  constructor(props) {
    super(props);
    this.res;
  }

  componentDidMount() {
    (async () => {
      this.res = await axios.get('/api/test/get');
      this.props.dispatchInput(this.res.data.result);
    })();
  }

  render() {
    const { testInputs } = this.props;
    return (
      <Fragment>
        <TestViewComponent testInputs={testInputs} />
      </Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return { testInputs: state.testInputs };
};

export const mapDispatchToProps = dispatch => {
  return {
    dispatchInput: res => dispatch(testInput(res)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestView);
