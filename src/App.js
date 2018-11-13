import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import Landingcover from './Components/Landingcover';
import Skills from './Components/Skills';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Landing />
        <Landingcover />
        <Skills />
      </div>
    );
  }
}

export default App;
