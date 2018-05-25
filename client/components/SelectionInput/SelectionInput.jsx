import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class SelectionInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({
      value: e.target.value,
    });
  };



  render() {
    const { value, oid, qid, viewType} = this.props;
    switch (viewType) {
      case 'admin':
        return (
          <Fragment>
            <input
              type="radio"
              name={`${qid}radio`}
              onClick={this.handleSelect}
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
              name={qid}
              index={index}
              checked={this.state.checked}
              onClick={handleSelect}
            />
            <span>{value}</span>
          </Fragment>
        );
      default:
        return <span style={checked? {color:'red'}:{}}>{value}</span>;
    }
  }
}

SelectionInput.propTypes = {
  value: PropTypes.string,
  isSelected: PropTypes.bool,
  toggleSelect: PropTypes.func,
  handleText: PropTypes.func,
  viewType: PropTypes.string,
};

export default SelectionInput;
