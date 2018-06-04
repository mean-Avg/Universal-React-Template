import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TestForm = props => {
  const { handleChange, handleSubmit} = props;
  return (
    <Fragment>
      <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="test" onChange={handleChange} required />
        <button>Submit</button>
      </form>
      </div>
      
    </Fragment>
  );
};

TestForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default TestForm;
