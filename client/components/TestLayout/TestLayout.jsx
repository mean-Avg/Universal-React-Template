import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QuestionLayout from '../QuestionLayout';

const makeFormData = (e, questions) => {
  const elements = e.target.elements;
  const formData = Object.assign([], questions);
  formData.forEach(element => {
    element.question = elements[element.qid].value;
    element.options.forEach(option => {
      option.value = elements[option.oid].value;
    });
  });
  return formData;
};

const TestLayout = props => {
  const { test, addQuestion, viewType, submitForm, questions } = props;
  return (
    <Fragment>
      <h2>{test.test}</h2>
      <form
        onSubmit={e => {
          e.preventDefault();
          submitForm(makeFormData(e, questions));
        }}>
        <ol>
          {questions.map((question, index) => {
            return (
              <li key={index}>
                <QuestionLayout {...question} viewType={viewType} />
              </li>
            );
          })}
        </ol>
        <button>submit</button>
      </form>
      <button onClick={addQuestion}>Addquestion</button>
    </Fragment>
  );
};

TestLayout.propTypes = {};

export default TestLayout;
