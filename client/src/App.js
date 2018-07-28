import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppNavbar from './components/AppNavbar'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Rohito Bhambhani </h1>
        </header>
        <AppNavbar></AppNavbar>
      </div>
    );
  }
}

export default App;
