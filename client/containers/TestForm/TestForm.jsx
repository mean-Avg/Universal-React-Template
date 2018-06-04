import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import TestFormComponent from '../../components/TestForm';
import { testInput } from './reducer';

class TestForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
    this.res;
    this.handleChange = this.handleChange.bind(this);
    this.getData = this.getData.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.getData();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async getData(){
    this.res = await axios.get('/api/test/get');
    this.props.dispatchInput(this.res.data.result);
  }

  async handleSubmit(e) {
    e.preventDefault();
    await axios.post('/api/test/add', {
      [e.target.elements['test'].name]: e.target.elements['test'].value,
    });
    this.getData();
  }

  render() {
    const { testInputs } = this.props;
    return (
      <Fragment>
        <TestFormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          testInputs = {testInputs}
        />
      </Fragment>
    );
  }
}

export const mapStateToProps = state => {
  return { testInputs: state.testInputs };
};

export const mapDispatchToProps = dispatch => {
  return {
    dispatchInput: (res) => dispatch(testInput(res)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestForm);