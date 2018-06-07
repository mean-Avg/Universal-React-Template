import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const EditDeleteTest = props => {
  const { id, confirmDelete, confirmEdit, testVal } = props;
  return (
    <Fragment>
      <button
        data-id={id} data-test={testVal} onClick={confirmEdit}>
        Edit
      </button>
      <button data-id={id} onClick={confirmDelete}>
        Delete
      </button>
    </Fragment>
  );
};

EditDeleteTest.propTypes = {};

export default EditDeleteTest;
