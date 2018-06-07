import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TestForm = props => {
  const { handleChange, handleSubmit, value } = props;
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="test"
          onChange={handleChange}
          value={value}
          required
        />
        <button>Submit</button>
      </form>
    </Fragment>
  );
};

TestForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  value: PropTypes.string,
};

export default TestForm;
