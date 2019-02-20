import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./layouts/Header";
import Dashboard from "./leads/Dashboard";
import {Provider} from 'react-redux';
import {store} from '../store';
import {Provider as AlertProvider}  from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from "./layouts/Alerts";


// alert options
const options = {
  timeout : 3000,
  position : 'top center'
}


class App extends Component {
  render() {
    return (
      <Provider store = {store}>
      <AlertProvider template = {AlertTemplate} {...options}>
      <Fragment>
      <Alerts/>
        <Header />
        <div className="container">
          <Dashboard />
        </div>
      </Fragment>
      </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
