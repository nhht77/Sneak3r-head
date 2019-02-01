import React, { Component } from 'react';
import './App.css';

import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        
      <Footer/>
      </div>

    );
  }
}

export default App;
