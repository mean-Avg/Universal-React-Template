import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TestForm = props => {
  const { handleChange, handleForm, res } = props;
  return (
    <Fragment>
      <form onSubmit={handleForm}>
        <input type="text" name="test" onChange={handleChange} required />
        <button>Submit</button>
      </form>
      <span>{res}</span>
    </Fragment>
  );
};

TestForm.propTypes = {
  handleChange: PropTypes.func,
  handleForm: PropTypes.func,
  res: PropTypes.string,
};

export default TestForm;
