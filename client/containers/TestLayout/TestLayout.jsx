import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import TestLayoutComponent from '../../components/TestLayout';
import { submitTest } from './storeMods';


import {makeQuestionArray, makeOptionsArray} from '../../utils/questionsUtil';

class TestLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'admin',
      questions: props.test.questions
    };

    this.changeView = this.changeView.bind(this);
    this.addQuestion = this.addQuestion.bind(this);
  }

  changeView() {
    if (this.state.viewType === '')
      this.setState({
        viewType: 'admin',
      });
    else {
      this.setState({
        viewType: '',
      });
    }
  }

  addQuestion(){
    this.setState({
      questions: makeQuestionArray(this.state.questions, 4, makeOptionsArray)
    })
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.changeView}>change view</button>
        <TestLayoutComponent
          {...this.props}
          questions={this.state.questions}
          viewType={this.state.viewType}
          addQuestion={this.addQuestion}
        />
      </Fragment>
    );
  }
}
export const mapStateToProps = state => {
  return { test: state.data };
};

export const mapDispatchToProps = dispatch => {
  return {
    submitForm: questions => dispatch(submitTest(questions)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestLayout);
