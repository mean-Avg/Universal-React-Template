import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const SelectionInput = props => {
  const { name, isSelected, toggleSelect, value, handleText, viewType } = props;
  switch (viewType) {
    case 'admin':
      return (
        <Fragment>
          <input
            type="radio"
            name={name}
            checked={isSelected}
            onClick={toggleSelect}
          />
          <span>
            <input type="text" value={value} onChange={handleText} />
          </span>
        </Fragment>
      );
    case 'candidate':
      return (
        <Fragment>
          <input
            type="radio"
            name={name}
            checked={isSelected}
            onClick={toggleSelect}
          />
          <span>{value}</span>
        </Fragment>
      );
    default:
      return <span>{value}</span>;
  }
};

SelectionInput.propTypes = {
  value: PropTypes.string,
  isSelected: PropTypes.bool,
  toggleSelect: PropTypes.func,
  handleText: PropTypes.func,
  viewType: PropTypes.string,
};

export default SelectionInput;
