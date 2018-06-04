import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import { isEmpty } from 'lodash';

const TestForm = props => {
  const { handleChange, handleSubmit, testInputs} = props;
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input type="text" name="test" onChange={handleChange} required />
        <button>Submit</button>
      </form>
      <ul>
          {!isEmpty(testInputs) &&
            testInputs.map(elem => <li key={elem._id}>{elem.test}</li>)}
        </ul>
    </Fragment>
  );
};

TestForm.propTypes = {
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
};

export default TestForm;
