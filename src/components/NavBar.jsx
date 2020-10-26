import React from 'react';
import classes from './css_for_components/NavBar.module.css' ;

const NavBar = () => {
    return (
      <nav className={classes.nav_bar}>
          <ul>
            <li><a href='#'>Profile</a></li>
            <li><a href='#'>News</a></li>
            <li><a href='#'>Frends</a></li>
            <li><a href='#'>Message</a></li>
            <li><a href='#'>Audio</a></li>
            <li><a href='#'>Settings</a></li>
            
          </ul>
      </nav>
    );
  }

export default NavBar ;  
