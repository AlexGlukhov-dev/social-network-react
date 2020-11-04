import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import Dialogs from './components/Dialogs/Dialogs';
import Friends from './components/Friends/Friends';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { BrowserRouter, Route } from 'react-router-dom';






const App = props => {
  return (
    <BrowserRouter>
      <div className='wrapper'>
        <Header />
        <NavBar />
        <div className='wrapper_content'>
          <Route path='/profile' render={() => <Content PostsData={props.PostsData} />} />
          <Route path='/message' render={() => <Dialogs DialogData={props.DialogData} UsersData={props.UsersData} />} />
          <Route path='/friends' component={Friends} />
          <Route path='/music' component={Music} />
          <Route path='/feeds' component={News} />
          <Route path='/settings' component={Settings} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}



export default App;
