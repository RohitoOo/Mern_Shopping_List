import React, { Component } from 'react';

// Bootstrap CDN
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container} from 'reactstrap'

import './App.css';

import AppNavbar from './components/AppNavbar'
import ShoppingList from './components/ShoppingList'
import ItemModal from './components/ItemModal'


// Provider Component   <Provider store={store}>
// Provider Enables The Application to Share State Across Components 

import { Provider } from 'react-redux'
import store from './store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar/>
          <Container>
          <ItemModal/>
          <ShoppingList/>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
