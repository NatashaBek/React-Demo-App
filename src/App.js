import React, { Component } from 'react';
import { connect } from "react-redux";
import rotateAction from "../src/actions/rotateAction";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img
            src={logo}
            className={"App-logo" + (this.props.rotating ? "":" App-logo-paused")}
            alt="logo"
            onClick={() => this.props.rotateAction(!this.props.rotating)}
          />
          <p> Developed By Natasha B. </p>
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  rotateAction: (payload) => dispatch(rotateAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);