import React, { Fragment } from 'react';
import AppComponent from '../../components/App';
import TestForm from '../TestForm';

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <AppComponent />
        <TestForm />
      </Fragment>
    );
  }
}

export default App;
