import React from 'react';
import './App.css';

import Header from './components/Header';
import NavBar from './components/NavBar';
import Content from './components/Content';
import Footer from './components/Footer';





const App = () => {
  return (
    <div className='wrapper'>
      <Header />
      <NavBar />
      <Content />
      <Footer />
    </div>
  );
}



export default App;
