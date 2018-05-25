import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import QuestionLayout from '../QuestionLayout';

const TestLayout = props => {
  const {test, addQuestion, viewType, submitForm, questions}=props;
    return (
      <Fragment>
         <h2>{test.test}</h2>
        <form onSubmit={e=>{
          e.preventDefault();
          console.log(e.target.elements)
          submitForm();
        }}>
        <ol>
          {questions.map((question, index)=>{
            return <li key={index}><QuestionLayout {...question}/></li>;
          })}
          </ol>
          <button>submit</button>
          </form>
          <button onClick={addQuestion}>Addquestion</button>
      </Fragment>
    );
};

TestLayout.propTypes = {
};

export default TestLayout;
