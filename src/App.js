import React from 'react';
import './App.scss';
import TopNav from './components/topNav/topnav';
import Hero from './components/hero/hero';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App">
      <TopNav></TopNav>
      <Hero></Hero>
      <Footer></Footer>
    </div>
  );
}

export default App;
