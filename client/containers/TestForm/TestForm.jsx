import React, { Fragment } from 'react';
import TestFormComponent from '../../components/TestForm';
import axios from 'axios';
import { isEmpty } from 'lodash';

class TestForm extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      results: [],
      serverRes: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.populateData = this.populateData.bind(this);
    this.handleForm = this.handleForm.bind(this);
  }

  async populateData() {
    const res = await axios.get('/api/test/get');
    this.setState({
      results: res.data.result,
    });
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  async handleForm(e) {
    e.preventDefault();
    const res = await axios.post('/api/test/add', {
      [e.target.elements['test'].name]: e.target.elements['test'].value,
    });
    this.setState({ value: '', serverRes: res.data });
    this.populateData();
    setTimeout(() => {
      this.setState({
        serverRes: '',
      });
    }, 2000);
  }

  render() {
    return (
      <Fragment>
        <TestFormComponent
          handleChange={this.handleChange}
          handleForm={this.handleForm}
          res={this.state.serverRes}
        />
        <ul>
          {!isEmpty(this.state.results) &&
            this.state.results.map(elem => <li key={elem._id}>{elem.test}</li>)}
        </ul>
      </Fragment>
    );
  }
}

export default TestForm;
