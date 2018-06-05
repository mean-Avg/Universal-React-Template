import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../containers/Header';
import TestForm from '../../containers/TestForm';
import TestView from '../../containers/TestView';

const App = props => {
  return (
    <Fragment>
      <Route component={Header} />
      <hr />
      <Route path="/add" component={TestForm} />
      <Route path="/view" component={TestView} />
    </Fragment>
  );
};

App.propTypes = {};

export default App;
