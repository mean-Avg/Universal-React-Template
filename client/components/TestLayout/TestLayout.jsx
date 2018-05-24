import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QuestionLayout from '../QuestionLayout';

const TestLayout = props => {
  const { test, questions, testId, viewType } = props;
  return (
    <Fragment>
      <h2>{test}</h2>
      <ol>
        {questions.map((question, index) => {
          {return <li key={index}><QuestionLayout {...question} viewType={viewType}/></li>;}
        })}
      </ol>
    </Fragment>
  );
};

TestLayout.propTypes = {
  test: PropTypes.string,
  questions: PropTypes.array,
  testId: PropTypes.string,
  viewType: PropTypes.string
};

export default TestLayout;
