import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';

const TestView = props => {
  const { testInputs } = props;
  return (
    <Fragment>
      <ul>
        {!isEmpty(testInputs) &&
          testInputs.map(elem => <li key={elem._id}>{elem.test}</li>)}
      </ul>
    </Fragment>
  );
};

TestView.propTypes = {
  testInputs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      test: PropTypes.string.isRequired,
      __v: PropTypes.number,
    }),
  ),
};

export default TestView;
