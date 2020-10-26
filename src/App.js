import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';





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
