import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
            <div className="page-container">
              <Route exact path='/' component={Landing}/>
            </div>
          <Footer/>
        </div>

        </Router>
    );
  }
}
// {<Route exact path ="/" component={Landing}/>}


export default App;
