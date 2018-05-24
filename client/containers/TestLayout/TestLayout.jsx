import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import TestLayoutComponent from '../../components/TestLayout';

class TestLayout extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const data = {
      test: 'name of test',
      questions: [{question: 'q1', options: [{value:'o1'}, {value:'o2'}, {value:'o3'}, {value:'o4'}], qid: 'dfs3'},
      {question: 'q2', options: [{value:'o1'}, {value:'o2'}, {value:'o3'}, {value:'o4'}], qid: 'dfess3'},
      {question: 'q3', options: [{value:'o1'}, {value:'o2'}, {value:'o3'}, {value:'o4'}], qid: 'defegfs3'},
      {question: 'q4', options: [{value:'o1'}, {value:'o2'}, {value:'o3'}, {value:'o4'}], qid: 'ddess3'}],
      testId: '2nd2id0',
      viewType: ''
    }
    return <Fragment>
      <TestLayoutComponent {...data}/>
      </Fragment>;
  }
}
// export const mapStateToProps = state => {
//   return { count: state.count };
// };

// export const mapDispatchToProps = dispatch => {
//   return {
//     handleSelect: () => dispatch(incrementAction()),
//   };
// };

export default connect()(TestLayout);
