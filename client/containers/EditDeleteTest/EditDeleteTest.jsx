import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import axios from 'axios';

import { testInput } from '../TestView/reducer';
import EditDeleteTestComponent from '../../components/EditDeleteTest';

class EditDeleteTest extends React.Component {
  constructor(props) {
    super(props);
    this.res;
    this.confirmDelete = this.confirmDelete.bind(this);
    this.confirmEdit = this.confirmEdit.bind(this);
    this.getres = this.getres.bind(this);
  }

  confirmDelete(e) {
    if (confirm('delete this?')) {
      (async () => {
        await axios
          .delete(`/api/test/delete/${e.target.getAttribute('data-id')}`)
      })();
      this.getres();
    }
  }

  confirmEdit(e){
      const id = e.target.getAttribute('data-id');
      var val = prompt("Enter edit val", e.target.getAttribute('data-test'))
      if(val!==null){
          (async () => {
            await axios
              .put(`/api/test/edit/${id}`, {'test':val})
          })();
          this.getres();
      }
  }
  async getres() {
    this.res = await axios.get('/api/test/get');
    this.props.dispatchInput(this.res.data.result);
  }

  render() {
    return (
      <Fragment>
        <EditDeleteTestComponent
          {...this.props}
          confirmDelete={this.confirmDelete}
          confirmEdit={this.confirmEdit}
        />
      </Fragment>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    dispatchInput: res => dispatch(testInput(res)),
  };
};

export default connect(null, mapDispatchToProps)(EditDeleteTest);
