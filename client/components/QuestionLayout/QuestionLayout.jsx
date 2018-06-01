import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import SelectionInput from '../SelectionInput/SelectionInput';

class QuestionLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.question,
      answer: this.props.answer,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  handleSelect(e) {
    console.log('called');
    this.setState({
      answer: [name].value,
    });
  }

  render() {
    const { question, answer, qid, options, viewType } = this.props;
    return (
      <Fragment>
        {viewType==='admin' ? <input
          type="text"
          value={this.state.value}
          name={qid}
          onChange={this.handleChange}
        /> : <span name={qid}>{this.state.value}</span>}
        <ol>
          {options.map((option, index) => {
            return (
              <li key={index}>
                <SelectionInput
                  viewType={viewType}
                  qid={qid}
                  handleSelect={this.handleSelect}
                  checked={index === this.state.answer}
                  {...option}
                />
              </li>
            );
          })}
        </ol>
      </Fragment>
    );
  }
}

QuestionLayout.propTypes = {
  question: PropTypes.string,
  options: PropTypes.array,
};

export default QuestionLayout;
