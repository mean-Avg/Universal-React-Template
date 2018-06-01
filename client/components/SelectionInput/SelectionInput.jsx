import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class SelectionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSelect() {
    this.setState({
      checked: true,
    });
  }

  render() {
    const { value, oid, qid, viewType, handleSelect, checked } = this.props;
    switch (viewType) {
      case 'admin':
        return (
          <Fragment>
            <input
              type="radio"
              name={`${qid}radio`}
            />
            <span>
              <input
                type="text"
                name={oid}
                value={this.state.value}
                onChange={this.handleChange}
              />
            </span>
          </Fragment>
        );
      case 'candidate':
        return (
          <Fragment>
            <input
              type="radio"
              name={`${qid}radio`}
            />
            <span>{value}</span>
          </Fragment>
        );
      default:
        return <span style={checked ? { color: 'red' } : {}}>{value}</span>;
    }
  }
}

SelectionInput.propTypes = {};

export default SelectionInput;
