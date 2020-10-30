import React from 'react';
import classes from './NavBar.module.css' ;

const NavBar = () => {
    return (
      <nav className={classes.nav_bar}>
          <ul>
            <li>
              <a href='/profile'>
                <span>Profile</span>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href='/message'>
                <span>Message</span>
                <span>Message</span>
              </a>
            </li>
            <li>
              <a href='/friends'>
                <span>Friends</span>
                <span>Friends</span>
              </a>
            </li>
            <li>
              <a href='/music'>
                <span>Music</span>
                <span>Music</span>
              </a>
            </li>
            <li>
              <a href='/feeds'>
                <span>News</span>
                <span>News</span>
              </a>
            </li>
            <li>
              <a href='/settings'>
                <span>Settings</span>
                <span>Settings</span>
              </a>
            </li>
            
          </ul>
      </nav>
    );
  }

export default NavBar ;  
