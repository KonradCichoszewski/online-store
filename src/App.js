
import React from 'react';
import {Route} from 'react-router-dom';
// import { connect } from 'react-redux';

import NavBar from './components/NavBar'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/" component={Home} />
      <Route path="/about-us" component={AboutUs} />
      <Route path="/contact" component={Contact} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
