import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import TestFormComponent from '../../components/TestForm';

class TestForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    await axios.post('/api/test/add', {
      [e.target.elements['test'].name]: e.target.elements['test'].value,
    });
    this.setState({
      value: '',
    });
  }

  render() {
    const { testInputs } = this.props;
    return (
      <Fragment>
        <TestFormComponent
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          value={this.state.value}
        />
      </Fragment>
    );
  }
}

export default connect()(TestForm);
