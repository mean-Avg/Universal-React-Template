import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SelectionInput from '../SelectionInput/SelectionInput';

const QuestionLayout = props => {
  const { question, options, qid, viewType } = props;
  return (
    <Fragment>
      <h3>{question}</h3>
      <ol>
        {options.map((option, index) => {
        {return <li key={index}><SelectionInput {...option} viewType={viewType}/></li>;}
        })}
      </ol>
    </Fragment>
  );
};

QuestionLayout.propTypes = {
  question: PropTypes.string,
  options: PropTypes.array,
  qid: PropTypes.string,
  viewType: PropTypes.string
};

export default QuestionLayout;
