import React from 'react';
import classes from './NavBar.module.css' ;

const NavBar = () => {
    return (
      <nav className={classes.nav_bar}>
          <ul>
            <li>
              <a href='#'>
                <span>Profile</span>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>News</span>
                <span>News</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Friends</span>
                <span>Friends</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Message</span>
                <span>Message</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Audio</span>
                <span>Audio</span>
              </a>
            </li>
            <li>
              <a href='#'>
                <span>Settings</span>
                <span>Settings</span>
              </a>
            </li>
            
          </ul>
      </nav>
    );
  }

export default NavBar ;  
