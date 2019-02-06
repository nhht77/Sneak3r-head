import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import './App.css';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Landing from './components/Landing/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard.js';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div className="App">
          <Header/>
            <div className="page-container">
              <Route exact path='/' component={Landing}/>
              <Route exact path='/register' component={Register}/>
              <Route exact path='/login' component={Login}/>
              <Route exact path='/user/dashboard' component={Dashboard}/>
            </div>
          <Footer/>
        </div>
      </Router>
      </Provider>
    );
  }
}
// {<Route exact path ="/" component={Landing}/>}


export default App;
