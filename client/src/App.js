import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store.js';
import './App.css';

import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from "./actions/authAction";

import PrivateRoute from './components/Common/PrivateRoute';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Landing from './components/Landing/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard/Dashboard.js';
import Shop from './components/Shop/Shop.js';
import AddProduct from './components/Admin/AddProduct.js';

if(localStorage.jwtToken){
  let token = localStorage.jwtToken;
  // Set Token to Auth Header
  setAuthToken(token);
  // Decode Token
  const decoded = jwt_decode(token);
  // Set Current User
  store.dispatch(setCurrentUser(decoded));

  // Check for expired Token
  let now = Date.now() / 1000;
  if(token.exp < now){
    // Log User Out
    store.dispatch(logoutUser());

    // Redirect to Login
    window.location.href = "/login";
  }
}

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
              <Route exact path='/shop' component={Shop}/>
              <Switch>
                <PrivateRoute exact path='/user/dashboard' component={Dashboard}/>
              </Switch>
              <Switch>
                <PrivateRoute exact path='/admin/add-product' component={AddProduct}/>
              </Switch>
            </div>
          <Footer/>
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;

